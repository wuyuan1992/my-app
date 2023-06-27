import { useMemo } from "react"
import { Empty, Pagination } from "@douyinfe/semi-ui"

import type { Movie } from "@/types/movie"

import MovieList from "./MovieList"

export default function MovieListWithPagination({
  movies,
  total,
  page,
  onPageChange,
}: {
  movies: Movie[]
  total: number
  page: number
  onPageChange: (page: number) => void
}) {
  const showPagination = useMemo(() => {
    return total > movies.length && total > 0
  }, [movies.length, total])

  if (!movies?.length) return <Empty />

  return (
    <div className="flex flex-col items-stretch justify-start gap-4">
      {showPagination && (
        <Pagination
          key="top"
          pageSize={10}
          total={total ?? movies.length}
          currentPage={page}
          onPageChange={onPageChange}
          className="self-center"
        />
      )}

      <div className="min-h-[320px] w-full">
        <MovieList movies={movies ?? []} />
      </div>

      {showPagination && (
        <Pagination
          key="bottom"
          pageSize={10}
          total={total ?? 10}
          currentPage={page}
          onPageChange={onPageChange}
          className="self-center"
        />
      )}
    </div>
  )
}

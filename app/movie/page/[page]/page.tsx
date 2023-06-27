"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { useFetchMoviesByPage } from "@/requests/movies"

import MovieListWithPagination from "@/components/movie/MovieListWithPagination"

export default function IndexPage({
  params: { page },
}: {
  params: { page: string }
}) {
  const { data } = useFetchMoviesByPage(page)

  const router = useRouter()
  const goToPage = useCallback(
    (page: number) => {
      router.push(`/movie/page/${page}`)
    },
    [router]
  )
  return (
    <MovieListWithPagination
      page={parseInt(page, 10)}
      onPageChange={goToPage}
      movies={data?.movies ?? []}
      total={data?.total ?? 0}
    />
  )
}

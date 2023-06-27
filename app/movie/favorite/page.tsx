"use client"

import { useState } from "react"
import { useFetchFavoriteMoviesByPage } from "@/requests/movies"

import MovieListWithPagination from "@/components/movie/MovieListWithPagination"

export default function Favorite() {
  const [page, setPage] = useState(1)
  const { data } = useFetchFavoriteMoviesByPage(page)

  return (
    <MovieListWithPagination
      page={page}
      onPageChange={setPage}
      movies={data?.movies ?? []}
      total={data?.total ?? 0}
    />
  )
}

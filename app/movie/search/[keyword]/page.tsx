"use client"

import { useFetchMoviesByKeyword } from "@/requests/movies"

import MovieList from "@/components/movie/MovieList"

export default function IndexPage({
  params: { keyword },
}: {
  params: { keyword: string }
}) {
  const { data = [] } = useFetchMoviesByKeyword(keyword)

  return (
    <section>
      <MovieList movies={data} />
    </section>
  )
}

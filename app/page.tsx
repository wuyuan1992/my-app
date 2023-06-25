"use client"

import { useFetchMoviesByPage } from "@/requests/movies"

import MovieList from "@/components/movie/MovieList"

export default function IndexPage() {
  const { data = [] } = useFetchMoviesByPage(1)

  return (
    <section>
      <MovieList movies={data} />
    </section>
  )
}

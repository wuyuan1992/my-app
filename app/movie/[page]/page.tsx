"use client"

import { useFetchMoviesByPage } from "@/requests/movies"

import MovieList from "@/components/movie/MovieList"

export default function IndexPage({
  params: { page },
}: {
  params: { page: string }
}) {
  const { data = [] } = useFetchMoviesByPage(page)

  return (
    <section>
      <MovieList movies={data} />
    </section>
  )
}

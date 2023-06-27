import useRequest from "@/utils/useRequest"

import type { Movie } from "@/types/movie"

export function useFetchMoviesByPage(page: number | string) {
  return useRequest<{ total: number; movies: Movie[] }>(
    `/api/movies?page=${page}`
  )
}
export function useFetchFavoriteMoviesByPage(page: number | string) {
  return useRequest<{ total: number; movies: Movie[] }>(
    `/api/movies/favorite?page=${page}`
  )
}

export function useFetchMoviesByKeyword(keyword: string) {
  return useRequest<Movie[]>(`/api/movies/search?keyword=${keyword}`)
}

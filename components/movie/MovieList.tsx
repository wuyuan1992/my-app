import { useCallback } from "react"
import Image from "next/image"
import { Toast } from "@douyinfe/semi-ui"

import type { Movie } from "@/types/movie"

function MovieList({ movies }: { movies: Movie[] }) {
  const openMovie = useCallback((url: string) => {
    if (url) {
      window.open(url, "_blank")
    } else {
      Toast.warning({
        content: "No download link",
        showClose: true,
        textMaxWidth: 200,
        duration: 2000,
        bottom: 120,
      })
    }
  }, [])

  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(156px, 1fr))",
      }}
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="relative aspect-2/1 rounded-md border bg-slate-500 p-4 transition-all hover:scale-105 sm:aspect-4/3"
        >
          <Image
            fill
            src={movie.poster}
            alt={movie.name}
            className="rounded-md object-cover object-center"
            style={{ cursor: movie.download ? "pointer" : "not-allowed" }}
            onClick={() => openMovie(movie.download)}
          />
        </div>
      ))}
    </div>
  )
}

export default MovieList

import { useCallback } from "react"
import Image from "next/image"
import { Carousel, Spin, Toast } from "@douyinfe/semi-ui"

import type { Movie } from "@/types/movie"

function MovieRecommend({ movies }: { movies: Movie[] }) {
  const openMovie = useCallback((url: string) => {
    if (url) {
      window.open(url, "_blank")
    } else {
      Toast.warning("No download link")
    }
  }, [])

  if (!movies?.length) return <Spin />

  return (
    <div className="flex items-center justify-center">
      <Carousel
        indicatorType="dot"
        indicatorPosition="right"
        indicatorSize="medium"
        autoPlay={false}
        className="m-auto h-[480px] w-[100%] sm:h-[420px] sm:w-[92%]"
      >
        {movies.slice(4, 9).map((movie) => (
          <Image
            key={movie.id}
            fill
            src={movie.poster}
            alt={movie.name}
            className="rounded-md border object-cover object-center"
            style={{ cursor: movie.download ? "pointer" : "not-allowed" }}
            onClick={() => openMovie(movie.download)}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default MovieRecommend

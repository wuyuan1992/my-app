import type { Movie } from "@/types/movie"

function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="rounded-md border p-4"
          style={{
            aspectRatio: "3/4",
            backgroundImage: `url(${movie.poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  )
}

export default MovieList

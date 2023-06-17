import { NextResponse } from "next/server"
import { getMoviesFromInPageRange } from "@/utils/movie"

export async function GET(request: Request) {
  const movies = await getMoviesFromInPageRange(1, 2)
  return NextResponse.json(movies)
}

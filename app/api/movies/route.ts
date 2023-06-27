import { NextRequest, NextResponse } from "next/server"
import { getMoviesFromInPageRange } from "@/utils/movie"
import { kv } from "@vercel/kv"

import { SYNC_PAGE_KEY } from "@/config/RedisKey"
import db from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const pageString = request.nextUrl.searchParams.get("page")
  const page = pageString ? parseInt(pageString, 10) : 1
  const movies = await db.movie.findMany({
    skip: 10 * (page - 1),
    take: 10,
  })

  const total = await db.movie.count()

  return NextResponse.json({ movies, total })
}

export async function POST() {
  const page = (await kv.get<number>(SYNC_PAGE_KEY)) ?? 1
  await kv.set(SYNC_PAGE_KEY, page + 1)

  const movies = await getMoviesFromInPageRange(page, page + 1)

  await movies.map(async (movie) => {
    const exist = await db.movie.findFirst({
      where: {
        name: movie.name,
      },
    })
    if (exist) return console.log(`Movie ${movie.name} is exist`)

    return db.movie.create({
      data: {
        name: movie.name,
        poster: movie.poster,
        download: movie.download ?? "",
      },
    })
  })

  return NextResponse.json({ success: true, page })
}

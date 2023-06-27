import { NextRequest, NextResponse } from "next/server"

import db from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const page = parseInt(request.nextUrl.searchParams.get("page") as string, 10)

  const movies = await db.movie.findMany({
    take: 10,
    skip: 10 * (page - 1),
  })

  const total = 10

  return NextResponse.json({ movies, total })
}

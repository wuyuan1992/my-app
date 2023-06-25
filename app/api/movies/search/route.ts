import { NextRequest, NextResponse } from "next/server"

import db from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const keyword = request.nextUrl.searchParams.get("keyword") as string
  const movies = await db.movie.findMany({
    where: {
      name: {
        contains: keyword,
      },
    },
    take: 20,
  })

  return NextResponse.json(movies)
}

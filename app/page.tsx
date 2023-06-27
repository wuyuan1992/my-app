"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { useFetchMoviesByPage } from "@/requests/movies"
import { IconArrowRight } from "@douyinfe/semi-icons"
import { IconButton, Tooltip } from "@douyinfe/semi-ui"

import MovieList from "@/components/movie/MovieList"
import MovieRecommend from "@/components/movie/MovieRecommend"

export default function IndexPage() {
  const { data } = useFetchMoviesByPage(1)

  const router = useRouter()
  const goToPage = useCallback(() => {
    router.push("/movie/page/1")
  }, [router])

  return (
    <section className="flex flex-col items-stretch justify-start gap-4">
      <MovieRecommend movies={data?.movies ?? []} />

      <div className="flex items-center justify-between gap-4">
        <h4>Top Rated</h4>
        <Tooltip content="More" position="left" showArrow={false}>
          <IconButton
            size="small"
            theme="borderless"
            icon={<IconArrowRight />}
            onClick={goToPage}
          />
        </Tooltip>
      </div>
      <MovieList movies={data?.movies ?? []} />

      <div className="flex items-center justify-between gap-4">
        <h4>Recent</h4>
        <Tooltip content="More" position="left" showArrow={false}>
          <IconButton
            size="small"
            theme="borderless"
            icon={<IconArrowRight />}
            onClick={goToPage}
          />
        </Tooltip>
      </div>
      <MovieList movies={data?.movies ?? []} />
    </section>
  )
}

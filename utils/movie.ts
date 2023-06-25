import * as cheerio from "cheerio"

import type { Movie } from "@/types/movie"

const baseUrl = "https://www.bugutv.net/4kmovie"

async function getElement(url: string) {
  const result = await fetch(url).then((value) => value?.text())
  return result ? cheerio.load(result) : null
}

function getPagination(page: number) {
  const base = baseUrl
  if (page <= 1) return base
  return `${base}/page/${page}`
}

async function pickList(url: string) {
  const $ = await getElement(url)
  if (!$) return []

  const list = $("div.entry-media a[href^=https://www.bugutv.net]")

  return list.map((_, dom) => $(dom).attr("href")).toArray()
}

async function pickMovie(url: string) {
  const $ = await getElement(url)
  if (!$) return null

  const titleRaw = $("head title").text()
  const download = $("a[href^=magnet:?xt=]").attr("href") ?? ""
  const poster = $("figure.wp-block-image img").attr("src") ?? ""

  const name = titleRaw?.split("/")?.[0]?.trim() ?? titleRaw ?? ""

  return { name, poster, download } as Movie
}

async function getMovieOfPage(page: number) {
  const pageLink = getPagination(page)

  const movieLinks = await pickList(pageLink)

  const movies: Movie[] = []

  for (let i = 0; i < movieLinks.length; i++) {
    const movie = await pickMovie(movieLinks[i])
    await sleep(2)
    console.log(`p ${page}, ${i + 1}, done`)
    if (movie) {
      movies.push(movie)
    }
  }
  console.log(`p ${page}, done`)

  return movies
}

function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

export async function getMoviesFromInPageRange(start: number, end: number) {
  let result: Movie[] = []
  for (let i = start; i < end; i++) {
    const current = await getMovieOfPage(i)
    result = result.concat(current)
  }

  return result
}

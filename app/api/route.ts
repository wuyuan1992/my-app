import { NextResponse } from "next/server"
import { getMoviesFromInPageRange } from "@/utils/movie"
import { Client } from "@notionhq/client"
import {
  BlockObjectRequest,
  BlockObjectRequestWithoutChildren,
} from "@notionhq/client/build/src/api-endpoints"

const notionAuth = process.env.NOTION_TOKEN ?? ""
const notionDatabaseId = process.env.NOTION_DATABASE_ID ?? ""

export async function GET(request: Request) {
  const moviesTableBlock = await getMoviesTable()

  const client = new Client({
    auth: notionAuth,
  })

  await client.pages.create({
    parent: {
      type: "page_id",
      page_id: notionDatabaseId,
    },
    properties: {
      title: [
        {
          type: "text",
          text: {
            content: "movies",
          },
        },
      ],
    },
    children: [moviesTableBlock],
  })

  return NextResponse.json("success")
}

async function getMoviesTable() {
  const cols = ["标题", "海报", "下载链接"]
  const movies = await getMoviesFromInPageRange(1, 2)
  const rows = movies.map((movie) => {
    return [movie.title, movie.poster, movie.downloadLink]
  })

  return getTableBlock(cols, rows)
}
function getTableBlock(cols: string[], rows: string[][]) {
  const titleRow: BlockObjectRequestWithoutChildren = {
    type: "table_row",
    table_row: {
      cells: cols.map((title) => [
        {
          type: "text",
          text: {
            content: title,
          },
        },
      ]),
    },
  }

  const contentRows: BlockObjectRequestWithoutChildren[] = rows.map((cells) => {
    return {
      type: "table_row",
      table_row: {
        cells: cells.map((cell) => {
          return [
            {
              type: "text",
              text: {
                content: cell,
              },
            },
          ]
        }),
      },
    }
  })

  const result: BlockObjectRequest = {
    object: "block",
    type: "table",
    table: {
      table_width: cols.length,
      children: [titleRow, ...contentRows],
    },
  }

  return result
}

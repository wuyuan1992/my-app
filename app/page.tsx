"use client"

import { useMemo } from "react"

export default function IndexPage() {
  const dataSource: any[] = useMemo(() => {
    return [
      {
        title: "关于我的父亲 About My Father (2023)",
        poster: "https://img.bugutv.net/public/p2891462053.webp",
        downloadLink:
          "magnet:?xt=urn:btih:c91d4290a26d60b6435838e75920237ae525ec0b",
      },
      {
        title: "洛奇6：永远的拳王 Rocky Balboa (2006)",
        poster: "https://img.bugutv.net/public/p2053481851.webp",
        downloadLink:
          "magnet:?xt=urn:btih:a1fec98413577979975bd697e13d2d1e4d1bb805",
      },
      {
        title: "洛奇5 Rocky V (1990)",
        poster: "https://img.bugutv.net/public/p2577084811.webp",
        downloadLink:
          "magnet:?xt=urn:btih:bca14818b04412a5bc0834b3188e8fa082ab44fd",
      },
      {
        title: "惊天营救2 Extraction 2 (2023)",
        poster: "https://img.bugutv.net/public/p2892053237.webp",
        downloadLink:
          "magnet:?xt=urn:btih:a40cb77ca8b8f2ffce779dc8abf08a2abc2fd513",
      },
      {
        title: "圣乔治骑士 Chevalier (2022)",
        poster: "https://img.bugutv.net/public/p2893335365.webp",
        downloadLink:
          "magnet:?xt=urn:btih:d7419b041630f6e9a09251ebf0cee6c17419ff8f",
      },
      {
        title: "坎大哈陷落 Kandahar (2023)",
        poster: "https://img.bugutv.net/public/p2892639887.webp",
        downloadLink:
          "magnet:?xt=urn:btih:813b1672ed40688128d4d1446209902771c1d01e",
      },
      {
        title: "意乱情迷 Jagged Mind (2023)",
        poster: "https://img.bugutv.net/public/p2893319032.webp",
        downloadLink:
          "magnet:?xt=urn:btih:e9b68ee26bc26c244a0f576138a6107d7d545fae",
      },
      {
        title: "礼貌社会 Polite Society (2023)",
        poster: "https://img.bugutv.net/public/p2892126536.webp",
        downloadLink:
          "magnet:?xt=urn:btih:91CF3F795A5210586C3E6794E214AFFB04D11571",
      },
    ]
  }, [])

  return (
    <section>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {dataSource.map((movie) => (
          <div
            key={movie.name}
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
    </section>
  )
}

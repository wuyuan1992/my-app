import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { IconSearch } from "@douyinfe/semi-icons"
import { Input } from "@douyinfe/semi-ui"

function SearchBar() {
  const [search, setSearch] = useState<string>("")
  const router = useRouter()

  const onSearch = useCallback(() => {
    const keyword = search.trim()
    if (keyword) {
      router.push(`/movie/search/${keyword}`)
    } else {
      router.push(`/`)
    }
  }, [search, router])

  return (
    <Input
      value={search}
      onChange={(val) => setSearch(val)}
      onKeyDownCapture={(e) => {
        if (e.code === "Enter") onSearch()
      }}
      suffix={
        <IconSearch className="cursor-pointer" onClickCapture={onSearch} />
      }
      showClear
      placeholder="Search movie"
      className="max-w-[480px]"
    />
  )
}

export default SearchBar

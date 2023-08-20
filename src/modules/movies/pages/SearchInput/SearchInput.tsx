import { useDebounce } from "@uidotdev/usehooks"
import React, { useEffect, useState } from "react"

import { Input } from "@components/Input"

interface ISearchInput {
  clearSearchInput: boolean
  onTextChange: (value: string) => void
  setClearSearchInput: (value: boolean) => void
}

const SearchInput = ({ onTextChange, clearSearchInput, setClearSearchInput }: ISearchInput) => {
  const [search, setSearch] = useState("")
  const debounceSearchMovies = useDebounce(search, 300)
  useEffect(() => {
    setClearSearchInput(false)
    if (clearSearchInput) {
      setSearch("")
    }
    if (search.length > 0) {
      onTextChange(debounceSearchMovies)
    }
  }, [debounceSearchMovies, clearSearchInput, onTextChange, search.length, setClearSearchInput])

  return (
    <Input
      setValue={setSearch}
      type="outlined"
      value={search}
    />
  )
}

export { SearchInput }

import { useDebounce } from "@uidotdev/usehooks"
import React, { useState } from "react"

import { Input } from "src/components/Input"

interface ISearchInput {
  onTextChange: (value: string) => void
}

const SearchInput = ({ onTextChange }: ISearchInput) => {
  const [search, setSearch] = useState("")
  const debounceSearchMovies = useDebounce(search, 200)

  const onChangeText = (text: string) => {
    setSearch(text)
    if (search.length > 0) {
      onTextChange(debounceSearchMovies)
    }
  }
  const clearInput = () => setSearch("")
  return (
    <Input
      onChangeText={onChangeText}
      onClick={clearInput}
      type="outlined"
      value={search}
    />
  )
}

export { SearchInput }

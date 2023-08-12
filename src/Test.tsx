import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "./providers/hooks"
import { addMovies, moviesSelector } from "./providers/moviesSlice"

const Test = () => {
  const movies = useAppSelector(moviesSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addMovies())
  }, [dispatch])

  console.log(movies)
  console.log("dadad")
  return <div>Test</div>
}

export { Test }

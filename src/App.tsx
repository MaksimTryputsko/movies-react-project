import React from "react"
import { useSelector } from "react-redux"
import "./App.css"

const App = () => {
  const movies = useSelector((state: any) => state.movies)
  console.log(movies)
  return <div className="App" />
}

export default App

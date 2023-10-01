import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

import { Button } from "../../../components/Button"
import { searchMoviesService } from "../../../shared/api/searchMoviesService"
import { MAIN_PAGE } from "../../../shared/constants/path"
import { IMovie } from "../../movies/interface/imovie.interface"
import { SearchInput } from "../../movies/pages/SearchInput/SearchInput"

import styles from "./layout.module.scss"

const Layout = () => {
  const [searchMovies, setSearchMovies] = useState("")
  const [searchMoviesList, setSearchMoviesList] = useState([])
  const [disabledList, setDisabledList] = useState(true)
  const [clearSearchInput, setClearSearchInput] = useState(false)

  const classes = classNames(styles.searchMoviesList, { [styles.disabled]: disabledList })

  useEffect(() => {
    try {
      const getSearchMoviesData = async () => {
        const searchMoviesData = await searchMoviesService.searchMovies(searchMovies)
        setSearchMoviesList(searchMoviesData.results)
        setDisabledList(false)
      }
      getSearchMoviesData()
    } catch (error) {
      console.error(error)
    }
  }, [searchMovies])

  const onTextChange = (value: string) => {
    setSearchMovies(value)
  }
  const handleClick = () => {
    setDisabledList(true)
    setClearSearchInput(true)
  }

  return (
    <>
      <header className={styles.header}>
        <Link
          onClick={handleClick}
          to={MAIN_PAGE}
        >
          Movie Searcher
        </Link>
        <div>
          <SearchInput
            clearSearchInput={clearSearchInput}
            onTextChange={onTextChange}
            setClearSearchInput={setClearSearchInput}
          />
          {searchMoviesList.length > 0 && (
            <ul className={classes}>
              {searchMoviesList.map((movie: IMovie) => (
                <Link
                  key={movie.id}
                  onClick={handleClick}
                  to={`${movie.id}`}
                >
                  <li>{movie.title}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <Button
          onClick={() => {
            console.log("test")
          }}
          type="outlined"
        >
          Favorite
        </Button>
      </header>

      <Outlet />
    </>
  )
}

export { Layout }

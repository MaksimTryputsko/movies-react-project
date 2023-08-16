import { useDebounce } from "@uidotdev/usehooks"
import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

import { sendRequest } from "../../../shared/api/sendRequest"
import { MAIN_PAGE } from "../../../shared/constants/path"
import { IMovie } from "../../../shared/imovie.interface"

import styles from "./layout.module.scss"

interface ILayoutProps {
  setSearchMovieFromRequest: (value: IMovie) => void
}

const Layout = ({ setSearchMovieFromRequest }: ILayoutProps) => {
  const [disabledList, setDisabledList] = useState(false)
  const [search, setSearch] = useState("")
  const [searchMovies, setSearchMovies] = useState([])
  const [foundMovies, setFoundMovies] = useState(true)
  const debounceSearchMovies = useDebounce(search, 300)

  const classes = classNames(styles.searchMoviesList, { [styles.disabled]: disabledList })

  useEffect(() => {
    const getSearchMovies = async () => {
      try {
        const value = await sendRequest({ search: debounceSearchMovies })
        if (value?.data.results !== undefined) {
          setFoundMovies(true)
          const searchMoviesFromRequest = await value.data.results
          setSearchMovies(searchMoviesFromRequest)
        } else {
          setFoundMovies(false)
        }
      } catch (error) {
        console.error("Sorry we have problems", error)
      }
    }
    getSearchMovies()
  }, [debounceSearchMovies])

  const searchMoviesName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setDisabledList(false)
  }

  const handleClick = (movie: IMovie) => {
    setSearchMovieFromRequest(movie)
    setDisabledList(true)
    setSearch("")
  }
  return (
    <>
      <header className={styles.header}>
        <Link to={MAIN_PAGE}>Movie Searcher</Link>
        <div>
          <input
            className={styles.inputSearch}
            onChange={searchMoviesName}
            placeholder="Search film"
            type="search"
            value={search}
          />
          {searchMovies.length > 0 && foundMovies && (
            <ul className={classes}>
              {searchMovies.map((movie: IMovie) => (
                <Link
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  to={`${movie.id}`}
                >
                  <li>{movie.title}</li>
                </Link>
              ))}
            </ul>
          )}
          {!foundMovies && (
            <ul className={styles.searchMoviesList}>
              <li>The movie was not found</li>
            </ul>
          )}
        </div>
        <button type="button">Favorite</button>
      </header>

      <Outlet />
    </>
  )
}

export { Layout }

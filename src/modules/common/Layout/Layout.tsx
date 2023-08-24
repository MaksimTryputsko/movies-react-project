import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

import { Button } from "../../../components/Button"
import { searchMoviesService } from "../../../shared/api/searchMoviesService"
import { IMovie } from "../../movies/interface/imovie.interface"
import { SearchInput } from "../../movies/pages/SearchInput/SearchInput"

import { Text } from "src/components/TextComponent/Text"
import { MAIN_PAGE } from "src/shared/constants/path"

import styles from "./layout.module.scss"

const Layout = () => {
  const [searchMovies, setSearchMovies] = useState("")
  const [searchMoviesList, setSearchMoviesList] = useState([])
  const [disabledList, setDisabledList] = useState(true)

  const classes = classNames(styles.searchMoviesList, { [styles.disabled]: disabledList })
  useEffect(() => {
    const getSearchMoviesData = async () => {
      setDisabledList(false)
      const searchMoviesData = await searchMoviesService.searchMovies(searchMovies)
      setSearchMoviesList(searchMoviesData.results)
    }
    getSearchMoviesData()
  }, [searchMovies])

  const onTextChange = (value: string) => {
    setSearchMovies(value)
  }
  const handleClick = () => {
    setDisabledList(true)
  }
  return (
    <>
      <header className={styles.header}>
        <Link
          onClick={handleClick}
          to={MAIN_PAGE}
        >
          <Text size="S">Movie Searcher</Text>
        </Link>
        <div>
          <SearchInput onTextChange={onTextChange} />
          {searchMoviesList.length > 0 && (
            <ul className={classes}>
              {searchMoviesList.map((movie: IMovie) => (
                <Link
                  key={movie.id}
                  onClick={handleClick}
                  to={`${movie.id}`}
                >
                  <Text size="S">
                    <li>{movie.title}</li>
                  </Text>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <Link to="/home/favoritesMovies">
          <Button type="outlined">Favorite</Button>
        </Link>
      </header>

      <Outlet />
    </>
  )
}

export { Layout }

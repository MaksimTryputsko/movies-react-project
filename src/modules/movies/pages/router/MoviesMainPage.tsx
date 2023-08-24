import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

import { useAppSelector, useAppDispatch } from "src/hooks/hooks"
import { FavoritesMovies } from "src/modules/FavoritesMovies/FavoritesMovies"
import { Layout } from "src/modules/common/Layout/Layout"
import { MovieDescription } from "src/modules/movies/pages/MoviesDescription/MovieDescription"
import { MoviesList } from "src/modules/movies/pages/MoviesList/MoviesList"
import {
  moviesSelector,
  loadingDataFromTheServer,
} from "src/modules/movies/store/movies/moviesSlice"
import { DEFAULT_PAGE, FAVORITE_PAGE, ID_PAGES, MAIN_PAGE } from "src/shared/constants/path"

const MoviesMain = () => {
  const [numPage, setNumPage] = useState(1)
  const nextPage = () => setNumPage(numPage + 1)
  const previousPage = () => setNumPage(numPage > 1 ? numPage - 1 : 1)

  const dispatch = useAppDispatch()
  const movies = useAppSelector(moviesSelector)

  useEffect(() => {
    dispatch(loadingDataFromTheServer(numPage))
  }, [dispatch, numPage])

  return (
    <Routes>
      <Route
        element={
          <Navigate
            replace
            to={MAIN_PAGE}
          />
        }
        path={DEFAULT_PAGE}
      />
      <Route
        element={<Layout />}
        path={MAIN_PAGE}
      >
        <Route
          element={<MovieDescription />}
          path={`${MAIN_PAGE}/${ID_PAGES}`}
        />

        <Route
          element={
            <MoviesList
              movies={movies}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          }
          path={MAIN_PAGE}
        />
        <Route
          element={<FavoritesMovies />}
          path={`${MAIN_PAGE}/${FAVORITE_PAGE}`}
        />
      </Route>
    </Routes>
  )
}

export { MoviesMain }

import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

import { useAppSelector, useAppDispatch } from "../../../../hooks/hooks"
import { MAIN_PAGE } from "../../../../shared/constants/path"
import { Layout } from "../../../common/Layout/Layout"
import { moviesSelector, loadingDataFromTheServer } from "../../store/moviesSlice"
import { MovieDescription } from "../MoviesDescription/MovieDescription"
import { MoviesList } from "../MoviesList/MoviesList"

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
        path="/"
      />
      <Route
        element={<Layout />}
        path={MAIN_PAGE}
      >
        <Route
          element={<MovieDescription />}
          path="/home/:id"
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
      </Route>
    </Routes>
  )
}

export { MoviesMain }

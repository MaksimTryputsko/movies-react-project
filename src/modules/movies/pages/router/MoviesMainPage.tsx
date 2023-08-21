import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

import { useAppSelector, useAppDispatch } from "../../../../hooks/hooks"
import { MAIN_PAGE } from "../../../../shared/constants/path"
import { Layout } from "../../../common/Layout/Layout"
import { IMovie } from "../../interface/imovie.interface"
import { favoritesMoviesSelector } from "../../store/favoritesMoviesSlice"
import { moviesSelector, loadingDataFromTheServer } from "../../store/moviesSlice"
import { FavoritesMovies } from "../FavoritesMovies/FavoritesMovies"
import { MovieDescription } from "../MoviesDescription/MovieDescription"
import { MoviesList } from "../MoviesList/MoviesList"

import { movieByIdService } from "src/shared/api/movieByIdService"

const MoviesMain = () => {
  const [numPage, setNumPage] = useState(1)
  const moviesFavoritesId = useAppSelector(favoritesMoviesSelector)

  const nextPage = () => setNumPage(numPage + 1)
  const previousPage = () => setNumPage(numPage > 1 ? numPage - 1 : 1)

  const dispatch = useAppDispatch()
  const movies = useAppSelector(moviesSelector)

  useEffect(() => {
    dispatch(loadingDataFromTheServer(numPage))
  }, [dispatch, numPage])

  const [favoritesMovies, setFavoritesMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const favoritesMoviesFromSendRequest: IMovie[] = []
    moviesFavoritesId.forEach(async (id) => {
      const getMovieFavoriteData = await movieByIdService.getMoviesById(`${id}`)
      favoritesMoviesFromSendRequest.push(getMovieFavoriteData)
    })
    setFavoritesMovies(favoritesMoviesFromSendRequest)
  }, [moviesFavoritesId])

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
        <Route
          element={<FavoritesMovies favoritesMoviesList={favoritesMovies} />}
          path="/home/favoritesMovies"
        />
      </Route>
    </Routes>
  )
}

export { MoviesMain }

import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import { useAppSelector, useAppDispatch } from "../../../../hooks/hooks"
import { dataForTheRequest } from "../../../../providers/moviesSaga"
import { moviesSelector, initialIsLoading } from "../../../../providers/moviesSlice"
import { MAIN_PAGE } from "../../../../shared/constants/path"
import { IMovie } from "../../../../shared/imovie.interface"
import { Layout } from "../../../common/Layout/Layout"
import { MovieDescription } from "../MoviesDescription/MovieDescription"
import { MoviesList } from "../MoviesList/MoviesList"

const MoviesMain = () => {
  const [numPage, setNumPage] = useState(1)
  const [searchMovie, setSearchMovie] = useState<IMovie>()
  const nextPage = () => setNumPage(numPage + 1)
  const previousPage = () => setNumPage(numPage > 1 ? numPage - 1 : 1)
  dataForTheRequest.numberPage = numPage
  const dispatch = useAppDispatch()

  const movies = useAppSelector(moviesSelector)

  const setSearchMovieFromRequest = (value: IMovie) => setSearchMovie(value)

  useEffect(() => {
    dispatch(initialIsLoading())
  }, [dispatch, numPage])

  return (
    <Routes>
      <Route
        element={<Layout setSearchMovieFromRequest={setSearchMovieFromRequest} />}
        path={MAIN_PAGE}
      >
        {movies.map((movie: IMovie) => (
          <Route
            key={movie.id}
            element={
              <MovieDescription
                date={movie.release_date}
                image={movie.backdrop_path}
                rating={movie.vote_average}
                title={movie.original_title}
              />
            }
            path={`${movie.id}`}
          />
        ))}
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
        {searchMovie !== undefined && (
          <Route
            element={
              <MovieDescription
                date={searchMovie.release_date}
                image={searchMovie.backdrop_path}
                rating={searchMovie.vote_average}
                title={searchMovie.original_title}
              />
            }
            path={`${searchMovie.id}`}
          />
        )}
      </Route>
    </Routes>
  )
}

export { MoviesMain }

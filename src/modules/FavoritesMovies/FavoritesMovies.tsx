import { useEffect, useState } from "react"

import { favoriteMoviesIdSelector } from "../movies/store/favoritesMoviesIdSlice"

import { useAppDispatch, useAppSelector } from "src/hooks/hooks"
import { Movie } from "src/modules/common/Movies.tsx/Movie"
import { IMovie } from "src/modules/movies/interface/imovie.interface"
import {
  favoritesMoviesListSelector,
  loadingDataFromTheServerFavoritesMovie,
} from "src/modules/movies/store/favoritesMovies/favoritesMoviesSlice"

import styles from "./favoritesMovies.module.scss"

const FavoritesMovies = () => {
  const dispatch = useAppDispatch()
  const favoritesMoviesList = useAppSelector(favoritesMoviesListSelector)
  const [stateHeart, setStateHeart] = useState(true)
  const favoritesId = useAppSelector(favoriteMoviesIdSelector)
  useEffect(() => {
    dispatch(loadingDataFromTheServerFavoritesMovie(favoritesId))
  }, [dispatch, favoritesId])

  const onSelect = (value: boolean) => setStateHeart(!value)
  return (
    <div className={styles.wrapperForFavoritesMoviesList}>
      {favoritesMoviesList.map((el: IMovie) => (
        <Movie
          key={el.id}
          date={el.release_date}
          image={el.poster_path}
          isSelected={stateHeart}
          movieId={el.id}
          onSelect={onSelect}
          rating={el.vote_average}
          title={el.title}
        />
      ))}
    </div>
  )
}
export { FavoritesMovies }

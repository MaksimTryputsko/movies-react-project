import { useEffect, useState } from "react"

import { IMovie } from "../movies/interface/imovie.interface"
import {
  favoritesMoviesListSelector,
  loadingDataFromTheServerFavoritesMovie,
} from "../movies/store/favoritesMoviesSlice"

import { useAppDispatch, useAppSelector } from "src/hooks/hooks"
import { Movie } from "src/modules/common/Movies.tsx/Movie"

import styles from "./favoritesMovies.module.scss"

const FavoritesMovies = () => {
  const dispatch = useAppDispatch()
  // const [favoritesMoviesId, setFavoritesMoviesId] = useState([])
  const favoritesMoviesList = useAppSelector(favoritesMoviesListSelector)
  const [stateHeart, setStateHeart] = useState(true)
  const getMoviesIdFromLocalStorage = localStorage.getItem("favoritesMoviesIdList")

  useEffect(() => {
    if (getMoviesIdFromLocalStorage) {
      // setFavoritesMoviesId(JSON.parse(getMoviesIdFromLocalStorage))
      dispatch(loadingDataFromTheServerFavoritesMovie(JSON.parse(getMoviesIdFromLocalStorage)))
    }
  }, [dispatch, getMoviesIdFromLocalStorage])
  const changeStateHeart = (value: boolean) => setStateHeart(!value)
  return (
    <div className={styles.wrapperForFavoritesMoviesList}>
      {favoritesMoviesList.map((el: IMovie) => (
        <Movie
          key={el.id}
          changeStateHeart={changeStateHeart}
          date={el.release_date}
          image={el.poster_path}
          movieId={el.id}
          rating={el.vote_average}
          stateHeart={stateHeart}
          title={el.title}
        />
      ))}
    </div>
  )
}
export { FavoritesMovies }

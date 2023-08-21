import React from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import { useAppDispatch } from "src/hooks/hooks"
import {
  addFavoritesMoviesId,
  removeFavoritesId,
} from "src/modules/movies/store/favoritesMoviesSlice"

import styles from "./heart.module.scss"

interface IHeart {
  favorite: boolean
  favoriteMovieId: number
  handleClick: () => void
  style?: Record<string, string>
}

const Heart = ({ favorite, handleClick, style, favoriteMovieId }: IHeart) => {
  const dispatch = useAppDispatch()
  const addFavorite = () => {
    handleClick()
    dispatch(addFavoritesMoviesId(favoriteMovieId))
  }
  const removeFavorite = () => {
    handleClick()
    dispatch(removeFavoritesId(favoriteMovieId))
  }
  return (
    <div>
      {favorite ? (
        <AiFillHeart
          className={styles.default}
          color="red"
          onClick={removeFavorite}
          size="30"
          style={style}
        />
      ) : (
        <AiOutlineHeart
          className={styles.default}
          color="red"
          onClick={addFavorite}
          size="30"
          style={style}
        />
      )}
    </div>
  )
}

export { Heart }

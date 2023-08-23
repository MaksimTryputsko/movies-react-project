import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import { useAppDispatch } from "src/hooks/hooks"
import {
  addFavoritesMoviesId,
  removeFavoritesId,
} from "src/modules/movies/store/favoritesMoviesSlice"
import { addFavoriteIdToLocalStorage } from "src/shared/localStorage/addFavoriteIdToLocalStorage"
import { removeFavoriteIdFromLocalStorage } from "src/shared/localStorage/removeFavoriteIdFromLocalStorage"
import { setFavoriteDefaultHeart } from "src/shared/localStorage/setFavoriteDefaultHeart"

import styles from "./heart.module.scss"

interface IHeart {
  changeStateHeart?: (value: boolean) => void
  favoriteMovieId: number
  stateHeart?: boolean
}

const Heart = ({ favoriteMovieId, stateHeart, changeStateHeart }: IHeart) => {
  const [favorite, setFavorite] = useState(setFavoriteDefaultHeart(favoriteMovieId))

  const dispatch = useAppDispatch()

  const addFavorite = () => {
    dispatch(addFavoritesMoviesId(favoriteMovieId))
    setFavorite(!favorite)
    if (changeStateHeart && stateHeart !== undefined) {
      changeStateHeart(stateHeart)
    }
    addFavoriteIdToLocalStorage(favoriteMovieId)
  }

  const removeFavorite = () => {
    dispatch(removeFavoritesId(favoriteMovieId))
    setFavorite(!favorite)
    if (changeStateHeart && stateHeart !== undefined) {
      changeStateHeart(stateHeart)
    }
    removeFavoriteIdFromLocalStorage(favoriteMovieId)
  }

  return (
    <div>
      {favorite ? (
        <AiFillHeart
          className={styles.default}
          color="red"
          onClick={removeFavorite}
          size="30"
        />
      ) : (
        <AiOutlineHeart
          className={styles.default}
          color="red"
          onClick={addFavorite}
          size="30"
        />
      )}
    </div>
  )
}

export { Heart }

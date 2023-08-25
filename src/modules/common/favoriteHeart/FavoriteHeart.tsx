import { useState } from "react"

import { Heart } from "src/components/Heart/Heart"
import { useAppDispatch } from "src/hooks/hooks"
import {
  addFavoriteMovieId,
  removeFavoriteMovieId,
} from "src/modules/movies/store/favoritesMoviesIdSlice"
import { addFavoriteIdToLocalStorage } from "src/shared/localStorage/addFavoriteIdToLocalStorage"
import { removeFavoriteIdFromLocalStorage } from "src/shared/localStorage/removeFavoriteIdFromLocalStorage"
import { setFavoriteDefaultHeart } from "src/shared/localStorage/setFavoriteDefaultHeart"

interface IFavoriteHeart {
  favoriteMovieId: number
  isSelected?: boolean
  onSelect?: (value: boolean) => void
}

const FavoriteHeart = ({ favoriteMovieId, isSelected, onSelect }: IFavoriteHeart) => {
  const [favorite, setFavorite] = useState(setFavoriteDefaultHeart(favoriteMovieId))
  const dispatch = useAppDispatch()
  const addFavorite = () => {
    setFavorite(!favorite)
    if (onSelect && isSelected !== undefined) {
      onSelect(isSelected)
    }
    addFavoriteIdToLocalStorage(favoriteMovieId)
    dispatch(addFavoriteMovieId(favoriteMovieId))
  }

  const removeFavorite = () => {
    setFavorite(!favorite)
    if (onSelect && isSelected !== undefined) {
      onSelect(isSelected)
    }
    removeFavoriteIdFromLocalStorage(favoriteMovieId)
    dispatch(removeFavoriteMovieId(favoriteMovieId))
  }

  return (
    <Heart
      isSelected={favorite}
      onClickRemoveFromSelected={removeFavorite}
      onClickToSelected={addFavorite}
    />
  )
}

export { FavoriteHeart }

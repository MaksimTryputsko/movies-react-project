import { FAVORITES_MOVIES_ID_LIST } from "src/shared/constants/localStorage"

const removeFavoriteIdFromLocalStorage = (favoriteId: number) => {
  const getFavoriteMoviesIdListFromLocalStorage = localStorage.getItem(FAVORITES_MOVIES_ID_LIST)
  if (getFavoriteMoviesIdListFromLocalStorage) {
    const favoriteMoviesIdList = JSON.parse(getFavoriteMoviesIdListFromLocalStorage)
    const removeFavoriteMovieId = favoriteMoviesIdList.filter(
      (number: number) => number !== favoriteId,
    )
    localStorage.setItem(FAVORITES_MOVIES_ID_LIST, JSON.stringify(removeFavoriteMovieId))
  }
}

export { removeFavoriteIdFromLocalStorage }

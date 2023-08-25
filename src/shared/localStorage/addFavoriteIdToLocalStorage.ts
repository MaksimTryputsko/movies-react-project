import { FAVORITES_MOVIES_ID_LIST } from "src/shared/constants/localStorage"

const addFavoriteIdToLocalStorage = (favoriteId: number) => {
  const getFavoriteMoviesIdListFromLocalStorage = localStorage.getItem(FAVORITES_MOVIES_ID_LIST)
  if (getFavoriteMoviesIdListFromLocalStorage === null) {
    return localStorage.setItem(FAVORITES_MOVIES_ID_LIST, JSON.stringify([favoriteId]))
  }
  const favoriteMoviesIdList = JSON.parse(getFavoriteMoviesIdListFromLocalStorage)
  return localStorage.setItem(
    FAVORITES_MOVIES_ID_LIST,
    JSON.stringify([...favoriteMoviesIdList, favoriteId]),
  )
}

export { addFavoriteIdToLocalStorage }

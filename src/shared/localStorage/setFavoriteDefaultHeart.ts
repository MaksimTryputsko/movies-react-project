import { FAVORITES_MOVIES_ID_LIST } from "src/shared/constants/localStorage"

const setFavoriteDefaultHeart = (favoriteId: number) => {
  const getMoviesFavoritesIdFromTheServer = localStorage.getItem(FAVORITES_MOVIES_ID_LIST)
  if (getMoviesFavoritesIdFromTheServer) {
    return getMoviesFavoritesIdFromTheServer.includes(`${favoriteId}`)
  }
  return false
}
export { setFavoriteDefaultHeart }

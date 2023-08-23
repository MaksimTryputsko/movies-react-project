const setFavoriteDefaultHeart = (favoriteId: number) => {
  const getMoviesFavoritesIdFromTheServer = localStorage.getItem("favoritesMoviesIdList")
  return getMoviesFavoritesIdFromTheServer?.includes(`${favoriteId}`)
}
export { setFavoriteDefaultHeart }

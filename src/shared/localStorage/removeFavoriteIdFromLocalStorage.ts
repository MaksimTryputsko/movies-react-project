const removeFavoriteIdFromLocalStorage = (favoriteId: number) => {
  const getFavoriteMoviesIdListFromLocalStorage = localStorage.getItem("favoritesMoviesIdList")
  if (getFavoriteMoviesIdListFromLocalStorage) {
    const favoriteMoviesIdList = JSON.parse(getFavoriteMoviesIdListFromLocalStorage)
    const removeFavoriteMovieId = favoriteMoviesIdList.filter(
      (number: number) => number !== favoriteId,
    )
    return localStorage.setItem("favoritesMoviesIdList", JSON.stringify(removeFavoriteMovieId))
  }
  return NaN
}

export { removeFavoriteIdFromLocalStorage }

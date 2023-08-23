const addFavoriteIdToLocalStorage = (favoriteId: number) => {
  const getFavoriteMoviesIdListFromLocalStorage = localStorage.getItem("favoritesMoviesIdList")
  if (getFavoriteMoviesIdListFromLocalStorage === null) {
    return localStorage.setItem("favoritesMoviesIdList", JSON.stringify([favoriteId]))
  }
  const favoriteMoviesIdList = JSON.parse(getFavoriteMoviesIdListFromLocalStorage)
  return localStorage.setItem(
    "favoritesMoviesIdList",
    JSON.stringify([...favoriteMoviesIdList, favoriteId]),
  )
}

export { addFavoriteIdToLocalStorage }

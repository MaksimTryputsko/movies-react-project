export const getFavoritesMoviesIdFromLocalStorage = (value: string | null) => {
  if (value) {
    return JSON.parse(value)
  }
  return []
}

import axios from "axios"

interface ISendRequest {
  numberPage?: number
  search?: string
}

export const sendRequest = async ({ numberPage, search }: ISendRequest = {}) => {
  if (numberPage) {
    const getMovies = await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=0cf5ebecafe937361622d7a728ab5593&language=en-US&page=${numberPage}`,
      )
      .catch((error) => console.error(` Sorry we have ${error}`))
    return getMovies
  }
  const getMovies = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=0cf5ebecafe937361622d7a728ab5593&query=${search}&page=1`,
    )
    .catch((error) => console.error(` Sorry we have ${error}`))
  return getMovies
}

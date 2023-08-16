import axios from "axios"

export const sendRequest = async (numberPage: number) => {
  const getMovies = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=0cf5ebecafe937361622d7a728ab5593&language=en-US&page=${numberPage}`,
    )
    .then((response) => response.data)
    .catch((error) => console.log(` Sorry we have ${error}`))
  return getMovies
}

export const sendRequestSearchMovies = async (search: string) => {
  const searchMovies = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=0cf5ebecafe937361622d7a728ab5593&query=${search}&page=1`,
    )

    .then((response) => response.data)
    .catch((error) => console.log(` Sorry we have ${error}`))
  return searchMovies
}

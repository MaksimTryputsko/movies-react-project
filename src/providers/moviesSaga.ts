import { call, put, takeEvery } from "redux-saga/effects"

import { addMovies, IMovie } from "./moviesSlice"

function* workGetMoviesFetch() {
  const movies: IMovie[] = yield call(async () => {
    const getMovies = await fetch("https://jsonplaceholder.typicode.com/posts")
    return getMovies.json()
  })

  yield put(addMovies(movies.splice(0, 10)))
}

function* moviesSaga() {
  yield takeEvery("movies/addMovies", workGetMoviesFetch)
}

export default moviesSaga

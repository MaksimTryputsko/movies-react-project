import { call, put, takeEvery } from "redux-saga/effects"

import { sendRequest } from "../shared/api/sendRequest"
import { IMovie } from "../shared/imovie.interface"

import { addMovies, initialIsLoading, setDefaultIsLoading } from "./moviesSlice"

export const dataForTheRequest = {
  numberPage: 1,
}

function* workGetMoviesFetch() {
  const movies: IMovie[] = yield call(async () => {
    const getMovies = await sendRequest(dataForTheRequest.numberPage)
    return getMovies.results
  })

  yield put(addMovies(movies))
  yield setDefaultIsLoading()
}

function* moviesSaga() {
  yield takeEvery(initialIsLoading.type, workGetMoviesFetch)
}

export default moviesSaga

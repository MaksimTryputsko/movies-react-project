import { call, put, takeEvery } from "redux-saga/effects"

import { popularMoviesService } from "../../../shared/api/popularMoviesService"
import { IMovie } from "../interface/imovie.interface"

import {
  addMovies,
  loadingDataFromTheServer,
  isCompletedLoadingDataFromTheServer,
} from "./moviesSlice"

interface IAction {
  payload: number
  type: string
}

function* workGetMoviesFetch(action: IAction) {
  const movies: IMovie[] = yield call(async () => {
    const getMovies = await popularMoviesService.getPopularMovies(action.payload)
    return getMovies?.results
  })
  yield put(addMovies(movies))
  yield isCompletedLoadingDataFromTheServer()
}

function* moviesSaga() {
  yield takeEvery(loadingDataFromTheServer.type, workGetMoviesFetch)
}

export { moviesSaga }

import { call, put, takeEvery } from "redux-saga/effects"

import { IMovie } from "src/modules/movies/interface/imovie.interface"
import { popularMoviesService } from "src/shared/api/popularMoviesService"

import { addMovies, isCompletedMoviesLoading, loadingDataFromTheServer } from "./moviesSlice"

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
  yield isCompletedMoviesLoading()
}

function* moviesSaga() {
  yield takeEvery(loadingDataFromTheServer.type, workGetMoviesFetch)
}

export { moviesSaga }

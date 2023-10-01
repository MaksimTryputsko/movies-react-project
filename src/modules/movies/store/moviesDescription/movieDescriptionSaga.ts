import { call, put, takeEvery } from "redux-saga/effects"

import { IMovie } from "src/modules/movies/interface/imovie.interface"
import { movieByIdService } from "src/shared/api/movieByIdService"

import {
  addMovieDescription,
  isCompletedMovieDescriptionLoading,
  loadingDataFromTheServerDescriptionMovie,
} from "./movieDescriptionSlice"

interface IAction {
  payload: number
  type: string
}

function* workGetMoviesSendRequest(action: IAction) {
  const movie: IMovie = yield call(async () => {
    const getMovie = await movieByIdService.getMoviesById(`${action.payload}`)
    return getMovie
  })
  yield put(addMovieDescription(movie))
  yield isCompletedMovieDescriptionLoading()
}

function* movieDescriptionSaga() {
  yield takeEvery(loadingDataFromTheServerDescriptionMovie.type, workGetMoviesSendRequest)
}

export { movieDescriptionSaga }

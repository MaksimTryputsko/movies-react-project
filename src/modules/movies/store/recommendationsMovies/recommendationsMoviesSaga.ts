import { call, put, takeEvery } from "redux-saga/effects"

import { IMovie } from "src/modules/movies/interface/imovie.interface"
import { recommendationsMoviesService } from "src/shared/api/recommendationsMoviesService"

import {
  addRecommendationsMovies,
  isCompletedRecommendationsMoviesLoading,
  loadingRecommendationsMoviesFromTheServer,
} from "./recommendationsMoviesSlice"

interface IAction {
  payload: string
  type: string
}

function* workGetRecommendationsMoviesSendRequest(action: IAction) {
  const recommendationsMovies: IMovie[] = yield call(async () => {
    const getRecommendationsMovies = await recommendationsMoviesService.getRecommendationsMovies(
      action.payload,
    )
    return getRecommendationsMovies?.results.splice(0, 5)
  })
  yield put(addRecommendationsMovies(recommendationsMovies))
  yield isCompletedRecommendationsMoviesLoading()
}

function* recommendationsMoviesSaga() {
  yield takeEvery(
    loadingRecommendationsMoviesFromTheServer.type,
    workGetRecommendationsMoviesSendRequest,
  )
}

export { recommendationsMoviesSaga }

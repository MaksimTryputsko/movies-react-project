import { call, put, takeEvery } from "redux-saga/effects"

import { IMovie } from "../interface/imovie.interface"

import { movieByIdService } from "src/shared/api/movieByIdService"

import {
  setFavoritesMovies,
  loadingDataFromTheServerFavoritesMovie,
  isCompletedFavoritesLoading,
} from "./favoritesMoviesSlice"

interface IAction {
  payload: number[]
  type: string
}

function* workGetFavoritesMoviesSendRequest(action: IAction) {
  const favoritesMoviesList: IMovie[] = yield call(async () => {
    const favoritesMoviesId = action.payload
    const getFavoritesMoviesListFromSendRequest = favoritesMoviesId.map(async (el) => {
      const getFavoriteMovieFromSendRequest = await movieByIdService.getMoviesById(`${el}`)
      return getFavoriteMovieFromSendRequest
    })
    const favoritesMovies = await Promise.all(getFavoritesMoviesListFromSendRequest)
    return favoritesMovies
  })
  yield put(setFavoritesMovies(favoritesMoviesList))
  yield isCompletedFavoritesLoading()
}

function* moviesFavoritesSaga() {
  yield takeEvery(loadingDataFromTheServerFavoritesMovie.type, workGetFavoritesMoviesSendRequest)
}

export { moviesFavoritesSaga }

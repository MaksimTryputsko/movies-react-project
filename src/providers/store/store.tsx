/* eslint-disable import/no-cycle */
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { fork } from "redux-saga/effects"

import { moviesSaga } from "../../modules/movies/store/moviesSaga"
import { moviesReducer } from "../../modules/movies/store/moviesSlice"

import { moviesFavoritesSaga } from "src/modules/movies/store/favoriteMoviesSaga"
import { favoritesMoviesReducer } from "src/modules/movies/store/favoritesMoviesSlice"
import { movieDescriptionSaga } from "src/modules/movies/store/movieDescriptionSaga"
import { movieDescriptionReducer } from "src/modules/movies/store/movieDescriptionSlice"

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDescription: movieDescriptionReducer,
  favoritesMovies: favoritesMoviesReducer,
})

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
})

function* rootSaga() {
  yield fork(moviesSaga)
  yield fork(movieDescriptionSaga)
  yield fork(moviesFavoritesSaga)
}

saga.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

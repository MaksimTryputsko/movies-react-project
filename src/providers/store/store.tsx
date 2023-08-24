/* eslint-disable import/no-cycle */
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { fork } from "redux-saga/effects"

import { moviesFavoritesSaga } from "src/modules/movies/store/favoritesMovies/favoriteMoviesSaga"
import { favoritesMoviesReducer } from "src/modules/movies/store/favoritesMovies/favoritesMoviesSlice"
import { moviesSaga } from "src/modules/movies/store/movies/moviesSaga"
import { moviesReducer } from "src/modules/movies/store/movies/moviesSlice"
import { movieDescriptionSaga } from "src/modules/movies/store/moviesDescription/movieDescriptionSaga"
import { movieDescriptionReducer } from "src/modules/movies/store/moviesDescription/movieDescriptionSlice"

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

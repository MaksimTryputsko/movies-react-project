/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { fork } from "redux-saga/effects"

import { moviesSaga } from "../../modules/movies/store/moviesSaga"
import { moviesReducer } from "../../modules/movies/store/moviesSlice"

import { favoritesMoviesReducer } from "src/modules/movies/store/favoritesMoviesSlice"
import { movieDescriptionSaga } from "src/modules/movies/store/movieDescriptionSaga"
import { movieDescriptionReducer } from "src/modules/movies/store/movieDescriptionSlice"

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDescription: movieDescriptionReducer,
    favoritesMovies: favoritesMoviesReducer,
  },
  middleware: [saga],
})
function* rootSaga() {
  yield fork(moviesSaga)
  yield fork(movieDescriptionSaga)
}

saga.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

/* eslint-disable import/no-cycle */
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { fork } from "redux-saga/effects"

import { moviesFavoritesSaga } from "src/modules/movies/store/favoritesMovies/favoriteMoviesSaga"
import { favoritesMoviesReducer } from "src/modules/movies/store/favoritesMovies/favoritesMoviesSlice"
import { favoriteMoviesIdSliceReducer } from "src/modules/movies/store/favoritesMoviesIdSlice"
import { moviesSaga } from "src/modules/movies/store/movies/moviesSaga"
import { moviesReducer } from "src/modules/movies/store/movies/moviesSlice"
import { movieDescriptionSaga } from "src/modules/movies/store/moviesDescription/movieDescriptionSaga"
import { movieDescriptionReducer } from "src/modules/movies/store/moviesDescription/movieDescriptionSlice"
import { recommendationsMoviesSaga } from "src/modules/movies/store/recommendationsMovies/recommendationsMoviesSaga"
import { recommendationsMoviesReducer } from "src/modules/movies/store/recommendationsMovies/recommendationsMoviesSlice"

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDescription: movieDescriptionReducer,
  favoritesMovies: favoritesMoviesReducer,
  favoriteMoviesId: favoriteMoviesIdSliceReducer,
  recommendationsMovies: recommendationsMoviesReducer,
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
  yield fork(recommendationsMoviesSaga)
}

saga.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

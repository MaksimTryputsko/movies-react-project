import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import { moviesSaga } from "../../modules/movies/store/moviesSaga"
import { moviesReducer } from "../../modules/movies/store/moviesSlice"

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [saga],
})
saga.run(moviesSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

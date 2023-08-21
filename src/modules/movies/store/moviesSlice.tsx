import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { RootState } from "../../../providers/store/store"
import { IMovie } from "../interface/imovie.interface"

interface IMovieState {
  isLoading: boolean
  list: IMovie[]
  numberPage: number
}

const initialState: IMovieState = {
  isLoading: false,
  list: [],
  numberPage: 1,
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadingDataFromTheServer: (state, action: PayloadAction<number>) => {
      state.isLoading = true
      state.numberPage = action.payload
    },
    addMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.list = action.payload
    },
    isCompletedMoviesLoading: (state) => {
      state.isLoading = false
    },
  },
})
const moviesReducer = moviesSlice.reducer

export const { addMovies, loadingDataFromTheServer, isCompletedMoviesLoading } = moviesSlice.actions

export const moviesSelector = (state: RootState) => state.movies.list
export { moviesReducer }

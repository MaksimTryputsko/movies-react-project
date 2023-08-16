import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IMovie } from "../shared/imovie.interface"

import type { RootState } from "./store/store"

interface IMovieState {
  isLoading: boolean
  list: IMovie[]
}

const initialState: IMovieState = {
  isLoading: false,
  list: [],
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    initialIsLoading: (state) => {
      state.isLoading = true
    },
    addMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.list = action.payload
    },
    setDefaultIsLoading: (state) => {
      state.isLoading = false
    },
  },
})

export const { addMovies, initialIsLoading, setDefaultIsLoading } = moviesSlice.actions
export const moviesSelector = (state: RootState) => state.movies.list
export default moviesSlice.reducer

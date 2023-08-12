import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { RootState } from "./store"

export interface IMovie {
  body: string
  id: number
  title: string
  userId: number
}

interface IMovieState {
  list: IMovie[] | undefined
}

const initialState: IMovieState = {
  list: [],
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMovie[] | undefined>) => {
      state.list = action.payload
    },
  },
})

export const { addMovies } = moviesSlice.actions
export const moviesSelector = (state: RootState) => state.movies.list
export default moviesSlice.reducer

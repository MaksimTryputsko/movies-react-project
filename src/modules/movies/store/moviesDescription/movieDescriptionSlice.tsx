/* eslint-disable import/no-cycle */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IMovie } from "src/modules/movies/interface/imovie.interface"
import { RootState } from "src/providers/store/store"

interface IMovieDescriptionState {
  idMovieDescription: string
  isLoading: boolean
  movieDescription: IMovie | undefined
}
const initialState: IMovieDescriptionState = {
  isLoading: false,
  movieDescription: undefined,
  idMovieDescription: "",
}

const movieDescriptionSlice = createSlice({
  name: "movieDescription",
  initialState,
  reducers: {
    loadingDataFromTheServerDescriptionMovie: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.idMovieDescription = action.payload
    },
    addMovieDescription: (state, action: PayloadAction<IMovie>) => {
      state.movieDescription = action.payload
    },
    isCompletedMovieDescriptionLoading: (state) => {
      state.isLoading = false
    },
  },
})

const movieDescriptionReducer = movieDescriptionSlice.reducer
export { movieDescriptionReducer }
export const {
  loadingDataFromTheServerDescriptionMovie,
  addMovieDescription,
  isCompletedMovieDescriptionLoading,
} = movieDescriptionSlice.actions

export const movieDescriptionSelector = (state: RootState) =>
  state.movieDescription.movieDescription

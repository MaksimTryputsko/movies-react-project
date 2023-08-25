import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IMovie } from "src/modules/movies/interface/imovie.interface"
import type { RootState } from "src/providers/store/store"

interface IMovieState {
  id: string
  isLoading: boolean
  recommendationsMoviesList: IMovie[]
}

const initialState: IMovieState = {
  isLoading: false,
  recommendationsMoviesList: [],
  id: "",
}

const recommendationsMoviesSlice = createSlice({
  name: "recommendationsMovies",
  initialState,
  reducers: {
    loadingRecommendationsMoviesFromTheServer: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.id = action.payload
    },
    addRecommendationsMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.recommendationsMoviesList = action.payload
    },
    isCompletedRecommendationsMoviesLoading: (state) => {
      state.isLoading = false
    },
  },
})
const recommendationsMoviesReducer = recommendationsMoviesSlice.reducer

export const {
  loadingRecommendationsMoviesFromTheServer,
  addRecommendationsMovies,
  isCompletedRecommendationsMoviesLoading,
} = recommendationsMoviesSlice.actions

export const recommendationsMoviesSelector = (state: RootState) =>
  state.recommendationsMovies.recommendationsMoviesList

export { recommendationsMoviesReducer }

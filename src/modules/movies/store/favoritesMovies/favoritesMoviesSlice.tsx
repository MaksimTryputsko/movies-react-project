import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IMovie } from "src/modules/movies/interface/imovie.interface"
import type { RootState } from "src/providers/store/store"

interface IMovieState {
  favoritesMoviesIdList: number[]
  favoritesMoviesList: IMovie[]
  isLoading: boolean
}

const initialState: IMovieState = {
  favoritesMoviesIdList: [],
  isLoading: false,
  favoritesMoviesList: [],
}

const favoriteMoviesSlice = createSlice({
  name: "favoritesMovies",
  initialState,
  reducers: {
    loadingDataFromTheServerFavoritesMovie: (state, action: PayloadAction<number[]>) => {
      state.isLoading = true
      state.favoritesMoviesIdList = action.payload
    },
    setFavoritesMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.favoritesMoviesList = action.payload
    },
    isCompletedFavoritesLoading: (state) => {
      state.isLoading = false
    },
  },
})
const favoritesMoviesReducer = favoriteMoviesSlice.reducer

export const {
  setFavoritesMovies,
  loadingDataFromTheServerFavoritesMovie,
  isCompletedFavoritesLoading,
} = favoriteMoviesSlice.actions

export const favoritesMoviesSelector = (state: RootState) =>
  state.favoritesMovies.favoritesMoviesIdList

export const favoritesMoviesListSelector = (state: RootState) =>
  state.favoritesMovies.favoritesMoviesList
export { favoritesMoviesReducer }

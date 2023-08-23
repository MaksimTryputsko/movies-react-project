import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { RootState } from "../../../providers/store/store"
import { IMovie } from "../interface/imovie.interface"

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
    addFavoritesMoviesId: (state, action: PayloadAction<number>) => {
      state.favoritesMoviesIdList = [...state.favoritesMoviesIdList, action.payload]
    },
    removeFavoritesId: (state, action: PayloadAction<number>) => {
      state.favoritesMoviesIdList = state.favoritesMoviesIdList.filter(
        (id) => id !== action.payload,
      )
    },
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
  addFavoritesMoviesId,
  removeFavoritesId,
  setFavoritesMovies,
  loadingDataFromTheServerFavoritesMovie,
  isCompletedFavoritesLoading,
} = favoriteMoviesSlice.actions

export const favoritesMoviesSelector = (state: RootState) =>
  state.favoritesMovies.favoritesMoviesIdList

export const favoritesMoviesListSelector = (state: RootState) =>
  state.favoritesMovies.favoritesMoviesList
export { favoritesMoviesReducer }

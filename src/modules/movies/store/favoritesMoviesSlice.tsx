import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { RootState } from "../../../providers/store/store"

interface IMovieState {
  favoritesMoviesIdList: number[]
}

const initialState: IMovieState = {
  favoritesMoviesIdList: [],
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
  },
})
const favoritesMoviesReducer = favoriteMoviesSlice.reducer

export const { addFavoritesMoviesId, removeFavoritesId } = favoriteMoviesSlice.actions

export const favoritesMoviesSelector = (state: RootState) =>
  state.favoritesMovies.favoritesMoviesIdList

export { favoritesMoviesReducer }

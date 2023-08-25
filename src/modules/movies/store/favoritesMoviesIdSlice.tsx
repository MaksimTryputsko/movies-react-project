import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { RootState } from "src/providers/store/store"

interface IMovieState {
  favoritesMoviesIdList: number[]
}

const initialState: IMovieState = {
  favoritesMoviesIdList: [],
}

const favoriteMoviesIdSlice = createSlice({
  name: "favoritesMoviesId",
  initialState,
  reducers: {
    addFavoritesMoviesIdList: (state, action: PayloadAction<number[]>) => {
      state.favoritesMoviesIdList = action.payload
    },
    addFavoriteMovieId: (state, action: PayloadAction<number>) => {
      state.favoritesMoviesIdList = [...state.favoritesMoviesIdList, action.payload]
    },
    removeFavoriteMovieId: (state, action: PayloadAction<number>) => {
      state.favoritesMoviesIdList = state.favoritesMoviesIdList.filter(
        (movieId) => movieId !== action.payload,
      )
    },
  },
})
const favoriteMoviesIdSliceReducer = favoriteMoviesIdSlice.reducer

export const { addFavoritesMoviesIdList, addFavoriteMovieId, removeFavoriteMovieId } =
  favoriteMoviesIdSlice.actions

export const favoriteMoviesIdSelector = (state: RootState) =>
  state.favoriteMoviesId.favoritesMoviesIdList
export { favoriteMoviesIdSliceReducer }

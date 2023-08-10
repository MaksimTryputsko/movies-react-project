import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IMovie {
  id: number;
  name: string;
}
const initialState: IMovie[] = []

const moviesSlice = createSlice({
  name: "getMovies",
  initialState,
  reducers: {
    addMovies(state, action: PayloadAction<IMovie>) {
      state.push(action.payload)
    },
  },
})

export const { addMovies } = moviesSlice.actions
export default moviesSlice.reducer

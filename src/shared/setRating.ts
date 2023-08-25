import { IMovie } from "src/modules/movies/interface/imovie.interface"

export const setRating = (value: IMovie | undefined) => {
  if (value?.vote_average) {
    const starsRating = value.vote_average
    return Math.round(starsRating / 2)
  }
  return 0
}

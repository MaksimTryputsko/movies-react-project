interface IGenres {
  id: number
  name: string
}
export interface IMovie {
  adult: boolean
  backdrop_path: string
  budget: number
  genre_ids: number[]
  genres: IGenres[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  runtime: number
  tagline: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}

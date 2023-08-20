import { httpClient } from "./httpClient"

class MovieByIdService {
  public MOVIES_BY_ID_ENDPOINT = "3/movie/"

  getMoviesById = async (endpoint: string) =>
    httpClient.get(`${this.MOVIES_BY_ID_ENDPOINT}${endpoint}`, {
      queryParams: { language: "en-US" },
    })
}

export const movieByIdService = new MovieByIdService()

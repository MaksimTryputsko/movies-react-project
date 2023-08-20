import { httpClient } from "./httpClient"

class PopularMoviesService {
  private POPULAR_MOVIES_ENDPOINT = "3/movie/popular"

  getPopularMovies = async (numPage: number) =>
    httpClient.get(this.POPULAR_MOVIES_ENDPOINT, {
      queryParams: { language: "en-US", page: `${numPage}` },
    })
}

export const popularMoviesService = new PopularMoviesService()

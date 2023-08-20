import { httpClient } from "./httpClient"

class SearchMoviesService {
  private SEARCH_MOVIES_ENDPOINT = "3/search/movie"

  searchMovies = async (search: string) =>
    httpClient.get(this.SEARCH_MOVIES_ENDPOINT, {
      queryParams: { language: "en-US", query: search, page: 1 },
    })
}

export const searchMoviesService = new SearchMoviesService()

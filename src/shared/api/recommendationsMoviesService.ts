import { httpClient } from "./httpClient"

class RecommendationsMoviesService {
  private RECOMMENDATION_MOVIES_ENDPOINT = "3/movie/"

  getRecommendationsMovies = async (endpoint: string) =>
    httpClient.get(`${this.RECOMMENDATION_MOVIES_ENDPOINT}${endpoint}/recommendations`, {
      queryParams: { language: "en-US", page: 1 },
    })
}

export const recommendationsMoviesService = new RecommendationsMoviesService()

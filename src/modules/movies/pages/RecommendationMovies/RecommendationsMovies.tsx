import React, { useEffect, useState } from "react"

import { IMovie } from "../../interface/imovie.interface"

import { Text } from "src/components/TextComponent/Text"
import { Movie } from "src/modules/common/Movies.tsx/Movie"
import { recommendationsMoviesService } from "src/shared/api/recommendationsMoviesService"

import styles from "./recommendationsMovies.module.scss"

interface IRecommendationsMovies {
  idForRecommendationsMovies: string
}
const RecommendationsMovies = ({ idForRecommendationsMovies }: IRecommendationsMovies) => {
  const [recommendationsMovies, setRecommendationsMovies] = useState([])
  useEffect(() => {
    const getRecommendationsMoviesFromServer = async () => {
      const getRecommendationsMoviesData =
        await recommendationsMoviesService.getRecommendationsMovies(idForRecommendationsMovies)
      if (getRecommendationsMoviesData.results) {
        setRecommendationsMovies(getRecommendationsMoviesData?.results.splice(0, 5))
      }
    }
    getRecommendationsMoviesFromServer()
  }, [idForRecommendationsMovies])

  return (
    <div className={styles.recommendationsContainer}>
      <div>
        <Text size="M"> Recommendations</Text>
      </div>

      <div className={styles.wrapperForRecommendationMovies}>
        {recommendationsMovies.length > 0 ? (
          recommendationsMovies.map((movie: IMovie) => (
            <Movie
              key={movie.id}
              date={movie.release_date}
              image={movie.poster_path}
              movieId={movie.id}
              rating={movie.vote_average}
              title={movie.title}
            />
          ))
        ) : (
          <div>
            <Text size="L">We don&apos;t have recommendations for this movie</Text>
          </div>
        )}
      </div>
    </div>
  )
}

export { RecommendationsMovies }

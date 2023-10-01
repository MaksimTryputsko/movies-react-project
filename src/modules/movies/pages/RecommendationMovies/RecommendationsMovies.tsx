import React, { useEffect } from "react"

import { Text } from "src/components/TextComponent/Text"
import { useAppDispatch, useAppSelector } from "src/hooks/hooks"
import { Movie } from "src/modules/common/Movies.tsx/Movie"
import { IMovie } from "src/modules/movies/interface/imovie.interface"
import {
  loadingRecommendationsMoviesFromTheServer,
  recommendationsMoviesSelector,
} from "src/modules/movies/store/recommendationsMovies/recommendationsMoviesSlice"

import styles from "./recommendationsMovies.module.scss"

interface IRecommendationsMovies {
  idForRecommendationsMovies: string
}
const RecommendationsMovies = ({ idForRecommendationsMovies }: IRecommendationsMovies) => {
  const recommendationsMovies = useAppSelector(recommendationsMoviesSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadingRecommendationsMoviesFromTheServer(idForRecommendationsMovies))
  }, [dispatch, idForRecommendationsMovies])

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

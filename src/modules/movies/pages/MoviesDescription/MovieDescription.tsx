import { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import { Stars } from "src/components/Stars/Stars"
import { Text } from "src/components/TextComponent/Text"
import { useAppDispatch, useAppSelector } from "src/hooks/hooks"
import { FavoriteHeart } from "src/modules/common/favoriteHeart/FavoriteHeart"
import { RecommendationsMovies } from "src/modules/movies/pages/RecommendationMovies/RecommendationsMovies"
import {
  loadingDataFromTheServerDescriptionMovie,
  movieDescriptionSelector,
} from "src/modules/movies/store/moviesDescription/movieDescriptionSlice"
import { setRating } from "src/shared/setRating"

import styles from "./movieDescription.module.scss"

interface IGenre {
  id: number
  name: string
}
const MovieDescription: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const movieDescription = useAppSelector(movieDescriptionSelector)

  useEffect(() => {
    if (id) {
      dispatch(loadingDataFromTheServerDescriptionMovie(id))
    }
  }, [id, dispatch])

  const rating = useMemo(() => setRating(movieDescription), [movieDescription])
  return movieDescription ? (
    <div className={styles.descriptionContainer}>
      <div className={styles.movieDescriptionWrapper}>
        <div
          className={styles.posterImage}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${movieDescription.poster_path}")`,
          }}
        />
        <div className={styles.descriptionMovieBlock}>
          <div>
            <Text size="S">{movieDescription.release_date}</Text>
          </div>
          <div>
            <Text size="L">{movieDescription.title}</Text>
          </div>
          <FavoriteHeart favoriteMovieId={movieDescription.id} />

          <div className={styles.genresList}>
            {movieDescription.genres.map((genre: IGenre) => (
              <div
                key={genre.id}
                className={styles.genre}
              >
                <Text size="S">{genre.name}</Text>
              </div>
            ))}
          </div>
          <div className={styles.starsWrapper}>
            <Stars rating={rating} />
            <Text size="S">{movieDescription.vote_average}/10</Text>
          </div>
          <div>
            <Text
              bold
              size="S"
            >
              Budget:
            </Text>
            <Text size="S"> {movieDescription.budget}</Text>
          </div>
          <div>
            <Text
              bold
              size="S"
            >
              Duration:
            </Text>
            <Text size="S"> {movieDescription.runtime}</Text>
          </div>
          <div>
            <div>
              <Text
                bold
                size="S"
              >
                Slogan:
              </Text>
            </div>

            <Text size="S">{movieDescription.tagline}</Text>
          </div>
          <div className={styles.overview}>
            <div>
              <Text
                bold
                size="S"
              >
                Overview:
              </Text>
            </div>
            <Text size="S">{movieDescription.overview}</Text>
          </div>
        </div>
      </div>
      {id && (
        <div>
          <RecommendationsMovies idForRecommendationsMovies={id} />
        </div>
      )}
    </div>
  ) : (
    <div>
      <Text size="L">Sorry we have problem with server</Text>
    </div>
  )
}

export { MovieDescription }

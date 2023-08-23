import React from "react"
import { Link } from "react-router-dom"

import { Heart } from "src/components/Heart/Heart"
import { Text } from "src/components/TextComponent/Text"
import { MAIN_PAGE } from "src/shared/constants/path"

import styles from "./movie.module.scss"

interface IPropsMovie {
  changeStateHeart?: (value: boolean) => void
  date: string
  image: string
  movieId: number
  rating: number
  stateHeart?: boolean
  title: string
}

const Movie: React.FC<IPropsMovie> = ({
  image,
  date,
  rating,
  title,
  movieId,
  stateHeart,
  changeStateHeart,
}) => {
  const [year] = date.split("-")
  return (
    <div className={styles.wrapperForPosterImage}>
      <button
        className={styles.iconHeart}
        type="button"
      >
        <Heart
          changeStateHeart={changeStateHeart}
          favoriteMovieId={movieId}
          stateHeart={stateHeart}
        />
      </button>
      <Link to={`${MAIN_PAGE}/${movieId}`}>
        <div className={styles.poster}>
          <div
            className={styles.posterImage}
            style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${image}")` }}
          />

          <div className={styles.rating}>{rating}</div>
          <div className={styles.description}>
            <div>
              <Text size="S">{title}</Text>
            </div>
            <div>
              <Text size="S">{year}</Text>
            </div>
            <div className={styles.heart} />
          </div>
        </div>
      </Link>
    </div>
  )
}
export { Movie }

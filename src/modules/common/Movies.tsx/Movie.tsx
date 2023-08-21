import React, { useState } from "react"
import { Link } from "react-router-dom"

import { Heart } from "src/components/Heart/Heart"
import { Text } from "src/components/TextComponent/Text"

import styles from "./movie.module.scss"

interface IPropsMovie {
  date: string
  image: string
  movieId: number
  rating: number
  title: string
}

const Movie: React.FC<IPropsMovie> = ({ image, date, rating, title, movieId }) => {
  const [favorite, setFavorite] = useState(false)
  const [year] = date.split("-")
  const handleClick = () => setFavorite(!favorite)
  return (
    <div className={styles.wrapperForPosterImage}>
      <button
        className={styles.iconHeart}
        type="button"
      >
        <Heart
          favorite={favorite}
          favoriteMovieId={movieId}
          handleClick={handleClick}
        />
      </button>
      <Link to={`/home/${movieId}`}>
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
            <div className={styles.test} />
          </div>
        </div>
      </Link>
    </div>
  )
}
export { Movie }

import React from "react"
import { Link } from "react-router-dom"

import { Button } from "src/components/Button"
import { Text } from "src/components/TextComponent/Text"
import { FavoriteHeart } from "src/modules/common/favoriteHeart/FavoriteHeart"
import { MAIN_PAGE } from "src/shared/constants/path"

import styles from "./movie.module.scss"

interface IPropsMovie {
  date: string
  image: string
  isSelected?: boolean
  movieId: number
  onSelect?: (value: boolean) => void
  rating: number
  title: string
}

const Movie: React.FC<IPropsMovie> = ({
  image,
  date,
  rating,
  title,
  movieId,
  isSelected,
  onSelect,
}) => {
  const [year] = date.split("-")
  return (
    <div className={styles.wrapperForPosterImage}>
      <Button type="text">
        <FavoriteHeart
          favoriteMovieId={movieId}
          isSelected={isSelected}
          onSelect={onSelect}
        />
      </Button>
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

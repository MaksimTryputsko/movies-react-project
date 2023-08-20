import React, { useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom"

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
    <Link to={`${movieId}`}>
      <div className={styles.poster}>
        <div
          className={styles.posterImage}
          style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${image}")` }}
        />
        {favorite ? (
          <AiFillHeart
            className={styles.iconHeart}
            color="red"
            onClick={handleClick}
            size="30"
          />
        ) : (
          <AiOutlineHeart
            className={styles.iconHeart}
            color="red"
            onClick={handleClick}
            size="30"
          />
        )}

        <div className={styles.rating}>{rating}</div>
        <div className={styles.description}>
          <div>{title}</div>
          <div>{year}</div>
          <div className={styles.heart} />
          <div className={styles.test} />
        </div>
      </div>
    </Link>
  )
}
export { Movie }

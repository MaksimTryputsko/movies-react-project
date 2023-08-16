import React from "react"

import { ButtonOutlined } from "../../../../components/ButtonOutlined"
import { IMovie } from "../../../../shared/imovie.interface"
import { Movie } from "../../../common/Movies.tsx/Movie"

import styles from "./moviesList.module.scss"

interface IPropsMovie {
  movies: IMovie[]
  nextPage: () => void
  previousPage: () => void
}

const MoviesList: React.FC<IPropsMovie> = ({ movies, nextPage, previousPage }) => (
  <>
    <div className={styles.flexWrapper}>
      {movies.map((movie: IMovie) => (
        <Movie
          key={movie.id}
          date={movie.release_date}
          image={movie.backdrop_path}
          movieId={movie.id}
          rating={movie.vote_average}
          title={movie.title}
        />
      ))}
    </div>
    <div className={styles.wrapperForButton}>
      <ButtonOutlined onClick={previousPage}>PREVIOUS PAGE</ButtonOutlined>
      <ButtonOutlined onClick={nextPage}>Next Page</ButtonOutlined>
    </div>
  </>
)

export { MoviesList }

import React from "react"

import { Button } from "../../../../components/Button"
import { Movie } from "../../../common/Movies.tsx/Movie"
import { IMovie } from "../../interface/imovie.interface"

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
      <Button
        onClick={previousPage}
        type="outlined"
      >
        Previous page
      </Button>
      <Button
        onClick={nextPage}
        type="outlined"
      >
        Next Page
      </Button>
    </div>
  </>
)

export { MoviesList }

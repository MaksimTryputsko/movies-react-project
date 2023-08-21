import { Movie } from "src/modules/common/Movies.tsx/Movie"

import styles from "./favoritesMovies.module.scss"

const FavoritesMovies = ({ favoritesMoviesList }: any) => (
  <div className={styles.wrapperForFavoritesMoviesList}>
    {favoritesMoviesList.map((el: any) => (
      <Movie
        key={el.id}
        date={el.release_date}
        image={el.poster_path}
        movieId={el.id}
        rating={el.vote_average}
        title={el.title}
      />
    ))}
  </div>
)
export { FavoritesMovies }

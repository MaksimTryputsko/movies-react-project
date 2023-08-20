import { BrowserRouter } from "react-router-dom"

import styles from "./App.scss"
import { MoviesMain } from "./modules/movies/pages/router/MoviesMainPage"

const App = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <MoviesMain />
    </BrowserRouter>
  </div>
)

export { App }

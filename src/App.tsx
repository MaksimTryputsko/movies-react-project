import { BrowserRouter } from "react-router-dom"

import { MoviesMain } from "./modules/movies/pages/router/MoviesMainPage"

import "./App.css"

const App = () => (
  <div className="App">
    <BrowserRouter>
      <MoviesMain />
    </BrowserRouter>
  </div>
)

export default App

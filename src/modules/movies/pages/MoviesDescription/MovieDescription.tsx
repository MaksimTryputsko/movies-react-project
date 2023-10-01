import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { movieByIdService } from "../../../../shared/api/movieByIdService"
import { IMovie } from "../../interface/imovie.interface"

const MovieDescription: React.FC = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<IMovie>()

  useEffect(() => {
    if (id) {
      try {
        const getMoviesData = async () => {
          const test = await movieByIdService.getMoviesById(id)
          setMovie(test)
        }
        getMoviesData()
      } catch (error) {
        console.error(error)
      }
    }
  }, [id])

  return (
    <div>
      <p>{movie?.title}</p>
    </div>
  )
}

export { MovieDescription }

interface IPropsMovie {
  date: string
  image: string
  rating: number
  title: string
}
const MovieDescription: React.FC<IPropsMovie> = ({ image, date, rating, title }) => (
  <div>
    <div>
      <img
        alt={title}
        src={`https://image.tmdb.org/t/p/w500${image}`}
      />
    </div>
    <div>{title}</div>
    <div>{date}</div>
    <div>{rating}</div>
  </div>
)

export { MovieDescription }

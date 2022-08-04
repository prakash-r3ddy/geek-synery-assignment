import './index.css'

const MoviesDetails = props => {
  const {movie} = props
  const {
    director,
    genre,
    language,
    views,
    posterUrl,
    stars,
    title,
    votes,
  } = movie

  return (
    <li className="movie-card">
      <img src={posterUrl} className="movie-image" alt="poster" />
      <div className="details-container">
        <h1 className="movie-title">{title}</h1>
        <p className="text">
          <span className="span-text">Genre: </span>
          {genre}
        </p>
        <p className="text">
          <span className="span-text">Director: </span>
          {director}
        </p>
        <p className="text">
          <span className="span-text">Starring: </span>
          {stars}
        </p>
        <p className="text">
          <span className="span-text">Language: </span>
          {language}
        </p>
        <div className="views-votes-container">
          <p className="views-votes">{views} views | </p>
          <p className="views-votes"> voted by {votes} people</p>
        </div>
        <button className="view-button" type="button">
          View Trailer
        </button>
      </div>
    </li>
  )
}

export default MoviesDetails

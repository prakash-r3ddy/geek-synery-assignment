import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import * as Loader from 'react-loader-spinner'
import MoviesDetails from '../MoviesDetails'
import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {data: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    }

    const response = await fetch('https://hoblist.com/api/movieList', options)
    const data = await response.json()
    const detailsList = data.result

    this.setState({apiStatus: apiStatusConstants.success})

    const formattedDetails = detailsList.map(eachMovie => ({
      director: eachMovie.director,
      genre: eachMovie.genre,
      language: eachMovie.language,
      views: eachMovie.pageViews,
      posterUrl: eachMovie.poster,
      stars: eachMovie.stars,
      title: eachMovie.title,
      votes: eachMovie.totalVoted,
      id: eachMovie.releasedDate,
    }))
    this.setState({data: formattedDetails})
  }

  loadingView = () => (
    <div className="posts-loader-container" testid="loader">
      <Loader.TailSpin type="Oval" height="50" width="50" color="#4094EF" />
    </div>
  )

  renderSuccessView = () => {
    const {data} = this.state
    return (
      <ul className="movies-container">
        {data.map(eachMovie => (
          <MoviesDetails movie={eachMovie} key={eachMovie.posterUrl} />
        ))}
      </ul>
    )
  }

  renderDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return <p>null</p>
    }
  }

  render() {
    const loginDetails = localStorage.getItem('loginDetails')
    if (loginDetails === null) {
      return <Redirect to="/" />
    }

    return <div className="home-bg-container">{this.renderDetails()}</div>
  }
}

export default Home

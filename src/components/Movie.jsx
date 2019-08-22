import React, { Component } from 'react'
import axios from 'axios'

export class Movie extends Component {
  state = {
    movieData: []
  }
  // Call The API
  apiMovie = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=03423e5f93610593731b95e4756610af'
    )

    this.setState({
      movieData: resp.data.results
    })

    console.log(this.state.movieData)
  }
  componentDidMount() {
    this.apiMovie()
  }

  render() {
    return (
      <section className="card-area">
        <div>
          {this.state.movieData.map(results => {
            return (
              <div className="movie-card" key={results.id}>
                <p className="movie-title">{results['title']}</p>
                <img
                  className="movie-poster"
                  src={
                    ['https://image.tmdb.org/t/p/w185_and_h278_bestv2'] +
                    results['poster_path']
                  }
                  alt="MoviePoster"
                />
                <p className="movie-overview">{results['overview']}</p>
                <p className="release-date">
                  Release Date:{results['release_date']}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Movie

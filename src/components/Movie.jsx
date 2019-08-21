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
      <section>
        <div className="hero-movie">
          <div>
            {this.state.movieData.map(results => {
              return (
                <p key={results.id}>
                  {results['title']}
                  <img
                    src={
                      ['https://image.tmdb.org/t/p/w185_and_h278_bestv2'] +
                      results['poster_path']
                    }
                    alt="MoviePoster"
                  />
                  {results['overview']}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Movie

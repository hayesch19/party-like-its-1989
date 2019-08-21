import React, { Component } from 'react'
import Movie from './components/Movie.jsx'

class App extends Component {
  render() {
    return (
      <main>
        <header className="header-section">
          <h1>PARTY LIKE IT'S 1989!!</h1>
        </header>
        <Movie />
      </main>
    )
  }
}

export default App

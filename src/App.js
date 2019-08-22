import React, { Component } from 'react'
import Movie from './components/Movie.jsx'
import PowBox from './images/powbox.gif'
import Unicorn from './images/unicorn.gif'

class App extends Component {
  render() {
    return (
      <main>
        <header className="header-section">
          <img className="powbox" src={PowBox} />
          <h1>PARTY LIKE IT'S 1989!!</h1>
          <img className="powbox" src={PowBox} />
        </header>
        <Movie />
        <footer>
          <img className="unicorn" src={Unicorn} />
        </footer>
      </main>
    )
  }
}

export default App

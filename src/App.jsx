import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Game from './Game'
import './style.css'

class App extends Component {
  state = {}

  componentDidMount() {
    const el = document.querySelector('link[rel="stylesheet"]')
    el.addEventListener('load', () =>
      this.setState({
        cssLoaded: true
      })
    )
  }

  render() {
    const { cssLoaded } = this.state
    return cssLoaded ? (
      <Game/>
    ) : null;
  }
}

export default App;
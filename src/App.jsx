import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Game from './Game'
import './style.css'

class App extends Component {
  state = {
    props: null
  }

  componentDidMount() {
    const el = document.querySelector('link[rel="stylesheet"]')

    const data = new URLSearchParams(window.location.search).get('data') || 'default';
    const app = this, audio = [null];

    const onClick = (point, value, selected) => {
        if (selected.length === 1 && audio[Math.abs(value)]) {
            audio[Math.abs(value)].play();
        }
    };

    const onLinked = (selected, v1, v2) => {
        if (audio[Math.abs(v1)]) {
            audio[Math.abs(v1)].play();
        }
    };

    window.props = {};
    let level = 0;

    const showLevel = () => {
        if (!Array.isArray(window.props)) {
            window.props = [window.props];
        }

        const props = Object.assign({
            key: level,
            onClick: onClick,
            onLinked: onLinked
        }, window.props[level]);

        if (++level < window.props.length) {
            props.onNext = showLevel;
        }

        app.setState({ props: props });
    };

    window.loadSound = (array) => {
        array.forEach(path => {
            const currentAudio = new Audio(`data/${data}/${path}`);
            audio.push(currentAudio);
        });
    };

    const styleData = document.createElement('link');
    styleData.rel = 'stylesheet';
    styleData.href = `data/${data}/style.css`;
    document.head.appendChild(styleData);

    const scriptDefault = document.createElement('script');
    scriptDefault.src = 'default.js';
    scriptDefault.async = false;
    document.body.appendChild(scriptDefault);

    const scriptData = document.createElement('script')
    scriptData.src = `data/${data}/script.js`;
    scriptData.async = false;
    scriptData.addEventListener('load', showLevel);
    document.body.appendChild(scriptData);
  }

  render() {
    const { props } = this.state
    return props ? (
      <Game {...props} />
    ) : null;
  }
}

export default App;

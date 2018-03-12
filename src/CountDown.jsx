import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CountDown extends Component {
  static propTypes = {
    duration: PropTypes.number,
    onTick: PropTypes.func,
    onTimeout: PropTypes.func
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default CountDown;
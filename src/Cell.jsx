import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Cell extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    value: PropTypes
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Cell;
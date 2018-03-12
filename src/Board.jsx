import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Board extends Component {
  static propTypes = {
    matrix: PropTypes.array,
    onCellClick: PropTypes.func
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Board;
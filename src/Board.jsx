import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Board extends Component {
  static propTypes = {
    matrix: PropTypes.array,
    cellSize: PropTypes.number,
    cellMargin: PropTypes.number,
    origin: PropTypes.any,
    selected: PropTypes.array,
    suggestion: PropTypes.array,
    onCellClick: PropTypes.func
  }

  render() {
    const {
      origin,
      matrix,
      cellMargin,
      cellSize,
      selected,
      suggestion,
      onCellClick
    } = this.props
    return (
      <div className="board" style={{ left: origin[0], top: origin[1] }}>
        {matrix.map((row, y) =>
          row.map((value, x) => (
            <div
              key={x + ',' + y}
              className={
                'cell item-' +
                value +
                (selected.find(p => p[0] === x && p[1] === y)
                  ? ' selected'
                  : '') +
                ((suggestion || []).find(p => p[0] === x && p[1] === y)
                  ? ' suggestion'
                  : '')
              }
              style={{
                left: x * (cellSize + cellMargin),
                top: y * (cellSize + cellMargin),
                width: cellSize,
                height: cellSize
              }}
              onClick={() => (value !== 0 ? onCellClick([x, y]) : null)}
            />
          ))
        )}
      </div>
    )
  }
}

export default Board

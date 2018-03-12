import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
  static propTypes = {
    origin: PropTypes.any,
    points: PropTypes.array
  }

  render() {
    const { points, origin, cellSize, cellMargin } = this.props
    const line = points
      .map(point => {
        const x = point[0] * (cellSize + cellMargin) + cellSize / 2 + origin[0]
        const y = point[1] * (cellSize + cellMargin) + cellSize / 2 + origin[1]
        return `${x},${y}`
      })
      .join(' ')
    console.log(line)
    return (
      <svg className="lines">
        <polyline
          className="line"
          points={line}
        />
      </svg>
    )
  }
}

export default Link

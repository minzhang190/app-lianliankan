import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import Board from './Board'
import CountDown from './CountDown'
import Link from './Link'
import {calculateOrigin} from './utils'

import {
  Header,
  Container,
  Grid,
  Image,
  Rail,
  Segment,
  Sticky,
  Button
} from 'semantic-ui-react'

class Game extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    columns: PropTypes.number,
    rows: PropTypes.number,
    range: PropTypes.number,
    zeroThrottle: PropTypes.number,
    maxCellSize: PropTypes.number,
    cellMargin: PropTypes.number
  }

  static defaultProps = {
    width: 800,
    height: 600,
    columns: 8,
    rows: 8,
    range: 8,
    zeroThrottle: 0.6,
    maxCellSize: 20,
    cellMargin: 2
  }

  state = {
    playing: false,
    duration: 180,
    pair: [],
    suggestTimes: 3,
    matrix: [],
    origin: [0, 0], // 原点
    cellSize: 20
  }

  componentWillMount() {
    const { width, height, columns, rows, maxCellSize, cellMargin } = this.props
    const _columns = columns + 2
    const _rows = rows + 2
    const wSize = (width - (_columns - 1) * cellMargin) / _columns
    const hSize = (height - (_rows - 1) * cellMargin) / _rows
    const cellSize = Math.min(wSize, hSize, maxCellSize)
    const origin = calculateOrigin(width, height, _columns, _rows, cellSize, cellMargin)
    this.setState({cellSize, origin})
  }

  handleStart = () => {}

  handleStop = () => {}

  handleTick = () => {}

  handleCellClick = () => {}

  handleTimeout = () => {}

  render() {
    const {
      duration,
      playing,
      suggestTimes,
      width,
      height,
      columns,
      rows,
      range,
      zeroThrottle,
      matrix,
      linkPoints
    } = this.state
    return (
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1">连连看</Header>
        <Grid centered stretched celled="internally">
          <Grid.Column width={13}>
            <Segment>
              <Board matrix={matrix} onCellClick={this.handleCellClick} />
              {linkPoints && linkPoints.length > 1 ? (
                <Link points={linkPoints} />
              ) : null}
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment.Group compact>
              <Segment>
                <Button positive attached="bottom" onClick={this.handleStart}>
                  开始
                </Button>
              </Segment>
              <Segment>
                <Button negative attached="bottom" onClick={this.handleStop}>
                  结束
                </Button>
              </Segment>
              <Segment>
                <Button negative attached="bottom">
                  提示 (3 left)
                </Button>
              </Segment>
              <Segment>
                <CountDown
                  duration={duration}
                  onTick={this.handleTick}
                  onTimeout={this.handleTimeout}
                />
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Game

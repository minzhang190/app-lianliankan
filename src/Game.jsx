import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import Board from './Board'
import CountDown from './CountDown'
import Link from './Link'
import { calculateOrigin, genMatrix, removePair, isLinkable } from './utils'

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
    cellMargin: PropTypes.number,
    gameTimeLimit: PropTypes.number
  }

  static defaultProps = {
    width: 800,
    height: 600,
    columns: 8,
    rows: 8,
    range: 2,
    zeroThrottle: 0.6,
    maxCellSize: 40,
    cellMargin: 2,
    gameTimeLimit: 180
  }

  state = {
    duration: 0,
    pair: [],
    suggestTimes: 3,
    matrix: null,
    origin: [0, 0], // 原点
    cellSize: 32,
    linkPoints: []
  }

  componentWillMount() {
    const { width, height, columns, rows, maxCellSize, cellMargin } = this.props
    const _columns = columns + 2
    const _rows = rows + 2
    const wSize = (width - (_columns - 1) * cellMargin) / _columns
    const hSize = (height - (_rows - 1) * cellMargin) / _rows
    const cellSize = Math.min(wSize, hSize, maxCellSize)
    const origin = calculateOrigin(
      width,
      height,
      _columns,
      _rows,
      cellSize,
      cellMargin
    )
    this.setState({ cellSize, origin })
  }

  handleStart = () => {
    const { columns, rows, range, zeroThrottle } = this.props
    const matrix = genMatrix(columns, rows, range, zeroThrottle)
    this.setState({
      matrix,
      duration: this.props.gameTimeLimit
    })
  }

  handleStop = () => {
    this.setState({
      matrix: null
    })
  }

  handleTick = () => {
    const duration = this.state.duration - 1
    this.setState({ duration })
  }

  handleCellClick = point => {
    let { pair, matrix } = this.state
    if (pair.length === 0) {
      pair = [point]
    } else if (pair.length === 1) {
      // @todo click same point
      pair = [pair[0], point]
    }

    this.setState({ pair }, () => {
      this.tryLink(pair)
    })
  }

  tryLink(pair) {
    const link =
      pair.length === 2 ? isLinkable(...pair, this.state.matrix) : false

    if (link) {
      console.log(link)
      this.setState(
        {
          linkPoints: link,
          duration: this.state.duration + 3,
          matrix: removePair(pair, this.state.matrix),
          pair: []
        },
        () => setTimeout(() => this.setState({ linkPoints: [] }), 200)
      )
    } else {
      if (pair.length === 2) {
        this.setState({ pair: [] })
      }
    }
  }

  get isTimeout() {
    return this.state.duration === 0
  }

  get isGamePlaying() {
    return !!this.state.matrix
  }

  get isLinking() {
    return this.state.linkPoints.length > 1
  }

  render() {
    const {
      duration,
      pair,
      suggestTimes,
      matrix,
      origin,
      cellSize,
      linkPoints
    } = this.state
    const {
      width,
      height,
      columns,
      rows,
      range,
      zeroThrottle,
      maxCellSize,
      cellMargin,
      gameTimeLimit
    } = this.props
    return (
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1">连连看</Header>
        <Grid centered stretched celled="internally">
          <Grid.Column width={13}>
            <Segment textAlign="center">
              <div className="board-layout" style={{ width, height }}>
                {this.isGamePlaying ? (
                  <Board
                    selected={pair}
                    matrix={matrix}
                    cellSize={cellSize}
                    cellMargin={cellMargin}
                    origin={origin}
                    onCellClick={this.handleCellClick}
                  />
                ) : null}
                {this.isLinking ? (
                  <Link
                    points={linkPoints}
                    origin={origin}
                    width={width}
                    height={height}
                    cellSize={cellSize}
                    cellMargin={cellMargin}
                  />
                ) : null}
              </div>
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
                  提示 (还剩{suggestTimes}次)
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

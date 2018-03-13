import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import Board from './Board'
import CountDown from './CountDown'
import Link from './Link'
import {
  calculateOrigin,
  genMatrix,
  removePair,
  isLinkable,
  isGoalAccomplished,
  isGameStuck,
  getAllLink,
  isPointsEqual
} from './utils'

import {
  Header,
  Container,
  Grid,
  Segment,
  Dimmer,
  Button,
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
    range: 9,
    zeroThrottle: 1,
    maxCellSize: 50,
    cellMargin: 2,
    gameTimeLimit: 120
  }

  state = {
    duration: 0,
    selected: [],
    suggestion: [], // 建议
    suggestTimes: 3,
    matrix: null,
    origin: [0, 0], // 原点
    cellSize: 32,
    linkPoints: [],
    won: false,
    stuck: false
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

  checkIsWon() {
    const { matrix } = this.state
    return isGoalAccomplished(matrix)
  }

  checkIsStuck() {
    const { matrix } = this.state
    return isGameStuck(matrix)
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

  get isPlayable() {
    if (!this.isGamePlaying) return false
    if (this.isTimeout) return false
    if (this.state.won) return false
    if (this.state.stuck) return false
    return true
  }

  get dimmed() {
    return this.isGamePlaying && !this.isPlayable
  }

  tryLink(selected) {
    const link =
      selected.length === 2 ? isLinkable(...selected, this.state.matrix) : false

    if (link) {
      console.log(link)
      this.setState(
        {
          linkPoints: link,
          duration: this.state.duration + 3,
          matrix: removePair(selected, this.state.matrix),
          selected: []
        },
        () => {
          setTimeout(() => {
            this.setState({ linkPoints: [] }, () => {
              if (this.checkIsWon()) {
                this.setState({ won: true })
              } else if (this.checkIsStuck()) {
                this.setState({ stuck: true })
              }
            })
          }, 200)
        }
      )
    } else {
      if (selected.length === 2) {
        this.setState({ selected: [] })
      }
    }
  }


  handleStart = () => {
    const { columns, rows, range, zeroThrottle } = this.props
    const matrix = genMatrix(columns, rows, range, zeroThrottle)
    // const matrix = [[0,0,0,0,0,0],[0,0,0,6,0,0],[0,0,0,2,0,0],[0,2,0,0,0,0],[0,0,6,0,0,0],[0,0,0,0,0,0]]
    getAllLink(matrix)
    this.setState({
      matrix,
      duration: this.props.gameTimeLimit,
      won: false,
      stuck: false,
      start: false,
      selected: [],
      suggestion: [],
      suggestTimes:3
    })
  }

  handleStop = () => {
    this.setState({
      matrix: null
    })
  }

  handleSuggestion = () => {
    const {matrix, suggestTimes} = this.state
    const links = getAllLink(matrix)
    if (links.length > 0) {
      const link = links[Math.floor(Math.random() * links.length)]
      const points = [link[0], link[link.length - 1]]
      this.setState({
        suggestion: points,
        suggestTimes: suggestTimes - 1
      }, () => {
        setTimeout(() => {
          this.setState({suggestion: []})
        }, 500)
      })
    }
  }

  handleTick = () => {
    const duration = this.state.duration - 1
    this.setState({ duration })
  }

  handleCellClick = point => {
    if (!this.isPlayable) return
    let { selected } = this.state
    if (selected.length === 0) {
      selected = [point]
    } else if (selected.length === 1) {
      if (isPointsEqual(selected[0], point)) {
        selected = []
      } else {
        selected = [selected[0], point]
      }
    }

    this.setState({ selected }, () => {
      this.tryLink(selected)
    })
  }

  renderMessage() {
    let icon = null
    let text = null

    switch (true) {
      case this.isTimeout:
        icon = '😫'
        text = 'You Lost, Time Is Running Out!'
        break
      case this.state.stuck:
        icon = '😱'
        text = 'You Lost, No Further Movement Can Be Made.'
        break
      case this.state.won:
        icon = '😬'
        text =
          'You Won! There Are Still ' + this.state.duration + ' Seconds Left!'
        break
      default:
        break
    }

    return (
      <Dimmer key="info" active={this.dimmed} onClickOutside={this.handleHide}>
        <Header as="h2" icon inverted style={{ marginTop: 100 }}>
          <span style={{ fontSize: '300%' }}>{icon}</span>
          <br />
          <div style={{ marginTop: 20 }}>{text}</div>
          <br />
          <Button positive style={{ marginTop: 20 }} onClick={this.handleStart}>
            再来一局！
          </Button>
        </Header>
      </Dimmer>
    )
  }

  renderGameBoard() {
    const { width, height } = this.props
    return (
      <Dimmer.Dimmable as={Segment} dimmed={this.dimmed} textAlign="center">
        {this.renderMessage()}
        <div
          className={'board-layout' + (this.isGamePlaying ? ' playing' : '')}
          style={{ width, height }}
        >
          {this.renderPlaying()}
        </div>
      </Dimmer.Dimmable>
    )
  }

  renderPlaying() {
    const { cellSize, origin, selected, matrix, linkPoints, suggestion } = this.state
    const { width, height, columns, rows, cellMargin } = this.props
    const ret = []
    if (!this.isGamePlaying) {
      // 为了动画效果插入一个全是0的矩阵
      ret.push(
        <Board
          key="board"
          selected={[]}
          matrix={genMatrix(columns, rows, 0, 0)}
          cellSize={cellSize}
          cellMargin={cellMargin}
          origin={origin}
        />
      )
      return ret
    }

    ret.push(
      <Board
        key="board"
        selected={selected}
        suggestion={suggestion}
        matrix={matrix}
        cellSize={cellSize}
        cellMargin={cellMargin}
        origin={origin}
        onCellClick={this.handleCellClick}
      />
    )
    if (this.isLinking) {
      ret.push(
        <Link
          key="link"
          points={linkPoints}
          origin={origin}
          width={width}
          height={height}
          cellSize={cellSize}
          cellMargin={cellMargin}
        />
      )
    }

    return ret
  }

  renderStartButton() {
    return (
      <Segment>
        {!this.isPlayable ? (
          <Button positive attached="bottom" onClick={this.handleStart}>
            开始
          </Button>
        ) : (
          <Button negative attached="bottom" onClick={this.handleStop}>
            结束
          </Button>
        )}
      </Segment>
    )
  }

  renderSuggestionButton() {
    const { suggestTimes } = this.state
    return this.isPlayable ? (
      <Segment>
        <Button
          color='purple'
          attached="bottom"
          disabled={suggestTimes === 0}
          onClick={this.handleSuggestion}
        >
          提示 (还剩{suggestTimes}次)
        </Button>
      </Segment>
    ) : null
  }

  renderCountDown() {
    const { duration } = this.state
    return this.isPlayable ? (
      <Segment textAlign='center'>
        <CountDown
          duration={duration}
          onTick={this.handleTick}
        />
      </Segment>
    ) : null
  }

  render() {
    return (
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1">连连看</Header>
        <Grid centered stretched celled="internally">
          <Grid.Column width={13}>{this.renderGameBoard()}</Grid.Column>
          <Grid.Column width={3}>
            <Segment.Group compact>
              {this.renderCountDown()}
              {this.renderSuggestionButton()}
              {this.renderStartButton()}
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Game

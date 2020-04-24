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
  getMatrixValue,
  isPointsEqual,
  getSuggestion,
  getShuffled
} from './utils'

import {
  Header,
  Container,
  Grid,
  Segment,
  Dimmer,
  Button
} from 'semantic-ui-react'

class Game extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    columns: PropTypes.number,
    rows: PropTypes.number,
    range: PropTypes.number,
    use: PropTypes.number,
    zeroThrottle: PropTypes.number,
    maxCellSize: PropTypes.number,
    cellMargin: PropTypes.number,
    gameTimeLimit: PropTypes.number,
    durationIncrease: PropTypes.number,
    suggestTimes: PropTypes.number,
    shuffleTimes: PropTypes.number,
    shuffleOnStuck: PropTypes.bool,
    matching: PropTypes.bool,
    onClick: PropTypes.func,
    onLinked: PropTypes.func,
    onNext: PropTypes.func
  }

  static defaultProps = {
    width: 800,
    height: 600,
    columns: 2,
    rows: 2,
    range: 9,
    use: -1,
    zeroThrottle: 1,
    maxCellSize: 50,
    cellMargin: 2,
    gameTimeLimit: 120,
    durationIncrease: 3,
    suggestTimes: 3,
    shuffleTimes: 3,
    shuffleOnStuck: false,
    matching: false,
    onClick: () => {},
    onLinked: () => {},
    onNext: null
  }

  state = {
    duration: 0,
    selected: [],
    suggestion: [], // 建议
    suggestTimes: 3,
    shuffleTimes: 3,
    matrix: null,
    origin: [0, 0], // 原点
    cellSize: 32,
    linkPoints: [],
    won: false,
    stuck: false,
    shuffle: false
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
    return isGameStuck(matrix, this.props.matching)
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
    if (this.state.shuffle) return false
    return true
  }

  get dimmed() {
    return this.isGamePlaying && !this.isPlayable
  }

  doShuffle(voluntary) {
    const { matrix, shuffleTimes } = this.state

    this.setState(
      {
        shuffle: true,
        matrix: getShuffled(matrix, this.props.matching),
        shuffleTimes: voluntary ? shuffleTimes - 1 : shuffleTimes
      },
      () => {
        setTimeout(() => {
          this.setState({ shuffle: false })
        }, 500)
      }
    )
  }

  tryLink(selected) {
    const link = selected.length === 2 ?
      isLinkable(...selected, this.state.matrix, this.props.matching) : false

    if (link) {
      console.log(link)
      this.props.onLinked.call(this, selected,
        getMatrixValue(...selected[0], this.state.matrix),
        getMatrixValue(...selected[1], this.state.matrix))
      this.setState(
        {
          linkPoints: link,
          duration: this.state.duration + this.props.durationIncrease,
          matrix: removePair(selected, this.state.matrix),
          selected: []
        },
        () => {
          setTimeout(() => {
            this.setState({ linkPoints: [] }, () => {
              if (this.checkIsWon()) {
                this.setState({ won: true })
              } else if (this.checkIsStuck()) {
                if (this.props.shuffleOnStuck) {
                  this.doShuffle(false)
                } else {
                  this.setState({ stuck: true })
                }
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
    const { columns, rows, range, use, zeroThrottle, suggestTimes, shuffleTimes, matching } = this.props
    const matrix = genMatrix(columns, rows, range, use, zeroThrottle, matching)
    // const matrix = [[0,0,0,0,0,0],[0,0,0,6,0,0],[0,0,0,2,0,0],[0,2,0,0,0,0],[0,0,6,0,0,0],[0,0,0,0,0,0]]
    this.setState({
      matrix,
      duration: this.props.gameTimeLimit,
      won: false,
      stuck: false,
      start: false,
      selected: [],
      suggestion: [],
      suggestTimes: suggestTimes,
      shuffleTimes: shuffleTimes
    })
  }

  handleStop = () => {
    this.setState({
      matrix: null
    })
  }

  handleSuggestion = () => {
    const { matrix, suggestTimes } = this.state

    this.setState(
      {
        suggestion: getSuggestion(matrix, this.props.matching),
        suggestTimes: suggestTimes - 1
      },
      () => {
        setTimeout(() => {
          this.setState({ suggestion: [] })
        }, 500)
      }
    )
  }

  handleShuffle = () => {
    this.doShuffle(true)
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

    this.props.onClick.call(this, point,
      getMatrixValue(...point, this.state.matrix), selected)

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
      case this.state.shuffle:
        icon = '🙃'
        text = 'Shuffling Tiles...'
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
          {this.state.shuffle ? null :
            <Button positive style={{ marginTop: 20 }} onClick={this.handleStart}>
              Play Again!
            </Button>
          }
          <br />
          {this.state.won && this.props.onNext ?
            <Button positive style={{ marginTop: 20 }} onClick={this.props.onNext}>
              Next Level &gt;&gt;
            </Button>
          : null}
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
    const {
      cellSize,
      origin,
      selected,
      matrix,
      linkPoints,
      suggestion
    } = this.state
    const { width, height, columns, rows, cellMargin } = this.props
    const ret = []
    if (!this.isGamePlaying) {
      // 为了动画效果插入一个全是0的矩阵
      ret.push(
        <Board
          key="board"
          selected={[]}
          matrix={genMatrix(columns, rows, 0, 0, 0, false, false)}
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
    return this.state.shuffle ? null : (
      <Segment>
        {!this.isPlayable ? (
          <Button positive attached="bottom" onClick={this.handleStart}>
            Kāishǐ
          </Button>
        ) : (
          <Button negative attached="bottom" onClick={this.handleStop}>
            Jiéshù
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
          color="purple"
          attached="bottom"
          disabled={suggestTimes === 0}
          onClick={this.handleSuggestion}
        >
          Hint ({suggestTimes} left)
        </Button>
      </Segment>
    ) : null
  }

  renderShuffleButton() {
    const { shuffleTimes } = this.state
    return this.isPlayable ? (
      <Segment>
        <Button
          color="orange"
          attached="bottom"
          disabled={shuffleTimes === 0}
          onClick={this.handleShuffle}
        >
          Shuffle ({shuffleTimes} left)
        </Button>
      </Segment>
    ) : null
  }

  renderCountDown() {
    const { duration } = this.state
    return (this.isPlayable || this.state.shuffle) ? (
      <Segment textAlign="center">
        <CountDown duration={duration} onTick={this.handleTick} />
      </Segment>
    ) : null
  }

  render() {
    return (
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1">Liánliánkàn</Header>
        <Grid centered stretched celled="internally">
          <Grid.Column width={13}>{this.renderGameBoard()}</Grid.Column>
          <Grid.Column width={3}>
            <Segment.Group compact>
              {this.renderCountDown()}
              {this.renderSuggestionButton()}
              {this.renderShuffleButton()}
              {this.renderStartButton()}
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Game

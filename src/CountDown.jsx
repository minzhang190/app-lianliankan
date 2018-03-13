import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Statistic } from 'semantic-ui-react';

class CountDown extends Component {
  static propTypes = {
    duration: PropTypes.number,
    onTick: PropTypes.func,
  }

  componentWillMount() {
    this.timer = setInterval(this.props.onTick, 1000)
  }
  componentWillUnmount() {
    this.clearTimer()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.duration === 0) {
      this.clearTimer()
    }
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render() {
    const { duration } = this.props
    return (
      <Statistic size='small'>
        <Statistic.Value>{duration}''</Statistic.Value>
        <Statistic.Label>剩余时间</Statistic.Label>
      </Statistic>
    )
  }
}

export default CountDown

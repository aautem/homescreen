import getSeconds from 'date-fns/get_seconds'
import React, { Component } from 'react'

import ClockDisplay from './ClockDisplay'
import secondValues from '../src/utils/secondValues'
import TickRow from './TickRow'

const { stringify } = JSON

const dark = 'rgb(66, 67, 169)'
const light = '#610b82'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      colors: {
        primary: dark,
        secondary: light,
      },
      time: new Date(),
    })
  }

  componentDidMount() {
    setInterval(
      () => {
        const { colors } = this.state
        const time = new Date()

        this.setState({
          time,
        })

        if (
          getSeconds(time)
          === 0
        ) {
          this.setState({
            colors: {
              primary: (
                colors
                .secondary
              ),
              secondary: (
                colors
                .primary
              ),
            }
          })
        }
      },
      1000
    )
  }

  render() {
    const {
      colors,
      time,
    } = this.state

    return (
      <time className="Clock">
        {
          secondValues
          .map(secondsRow => (
            <TickRow
              colors={colors}
              key={
                stringify(
                  secondsRow
                )
              }
              seconds={secondsRow}
              time={time}
            />
          ))
        }

        <ClockDisplay time={time} />
      </time>
    )
  }
}

export default Clock

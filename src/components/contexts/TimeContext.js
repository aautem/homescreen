import format from 'date-fns/format'
import React, { Component, createContext } from 'react'

const TimeContext = createContext()

const nextTime = () => (
  format(
    new Date(),
    'HHmm'
  )
)

export class TimeProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTimeString: nextTime(),
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          currentTimeString: nextTime(),
        })
      },
      60000
    )
  }

  render() {
    return (
      <TimeContext.Provider
        value={{
          currentTimeString: (
            this.state.currentTimeString
          ),
        }}
      >
        <div className="Time">
          {this.props.children}
        </div>
      </TimeContext.Provider>
    )
  }
}

export const TimeConsumer = (
  TimeContext
  .Consumer
)

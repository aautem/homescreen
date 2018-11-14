import React, { Component, createContext } from 'react'

const DateTimeContext = createContext()

export const DateTimeInjector = (
  DateTimeContext.Consumer
)

export class DateTimeProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { dateTime: new Date() }
    this.updateEverySecond = this.updateEverySecond.bind(this)
  }

  componentDidMount() {
    this.updateEverySecond()
  }

  updateEverySecond() {
    this
    .setState({
      dateTime: new Date(),
    })

    setTimeout(
      this.updateEverySecond,
      1000,
    )
  }

  render() {
    return (
      <DateTimeContext.Provider
        value={this.state}
      >
        {
          this
          .props
          .children
        }
      </DateTimeContext.Provider>
    )
  }
}

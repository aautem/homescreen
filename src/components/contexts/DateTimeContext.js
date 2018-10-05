import React, { Component, createContext } from 'react'

const DateTimeContext = createContext()

export class DateTimeProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dateTime: new Date(),
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          dateTime: new Date(),
        })
      },
      1000
    )
  }

  render() {
    return (
      <DateTimeContext.Provider
        value={{
          dateTime: (
            this.state.dateTime
          ),
        }}
      >
        {this.props.children}
      </DateTimeContext.Provider>
    )
  }
}

export const DateTimeConsumer = (
  DateTimeContext
  .Consumer
)

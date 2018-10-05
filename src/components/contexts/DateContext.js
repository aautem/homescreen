import React, { Component, createContext } from 'react'

const DateContext = createContext()

export class DateProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDate: new Date(),
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          currentDate: new Date(),
        })
      },
      360000
    )
  }

  render() {
    return (
      <DateContext.Provider
        value={{
          currentDate: (
            this.state.currentDate
          ),
        }}
      >
        <div className="CalendarDate">
          {this.props.children}
        </div>
      </DateContext.Provider>
    )
  }
}

export const DateConsumer = (
  DateContext
  .Consumer
)

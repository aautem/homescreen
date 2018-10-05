import format from 'date-fns/format'
import React, { Component, createContext } from 'react'

const SecondContext = createContext()

const nextSecond = () => (
  format(
    new Date(),
    's' // single digit
  )
)

export class SecondProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSecond: nextSecond(),
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          currentSecond: nextSecond(),
        })
      },
      1000
    )
  }

  render() {
    return (
      <SecondContext.Provider
        value={{
          currentSecond: (
            this.state.currentSecond
          ),
        }}
      >
        <div className="SecondsColumn">
          {this.props.children}
        </div>
      </SecondContext.Provider>
    )
  }
}

export const SecondConsumer = (
  SecondContext
  .Consumer
)

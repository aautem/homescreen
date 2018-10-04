import getSeconds from 'date-fns/get_seconds'
import React, { Component, createContext } from 'react'

const CurrentDateContext = createContext()

const dark = 'rgb(66, 67, 169)'
const light = '#610b82'

export class CurrentDateProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: {
        primary: dark,
        secondary: light,
      },
      currentDate: new Date(),
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        const { colors } = this.state
        const currentDate = new Date()

        this.setState({
          currentDate,
        })

        if (
          getSeconds(currentDate)
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
    const { children } = this.props

    const {
      colors,
      currentDate,
    } = this.state

    return (
      <CurrentDateContext.Provider
        value={{
          colors,
          currentDate,
        }}
      >
        {children}
      </CurrentDateContext.Provider>
    )
  }
}

export const CurrentDateConsumer = CurrentDateContext.Consumer

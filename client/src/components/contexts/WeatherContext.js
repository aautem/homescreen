import axios from 'axios'
import React, { Component, createContext } from 'react'

const WeatherContext = createContext()

export class WeatherProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: [],
    }
  }

  componentDidMount() {
    axios.get(
      'http://localhost:3000'
      .concat('/api/weather')
    )
    .then(({ data }) => {
      this.setState({
        weather: data,
      })
    })
    .catch(error => {
      console.error(error)
    })

    // setInterval(
    //   () => {
    //     axios.get(
    //       'http://localhost:3001'
    //       .concat('/api/weather')
    //     )
    //     .then(response => {
    //       console.log({ response })
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    //   },
    //   3600000
    // )
  }

  render() {
    return (
      <WeatherContext.Provider
        value={{
          weather: (
            this.state.weather
          ),
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    )
  }
}

export const WeatherConsumer = (
  WeatherContext
  .Consumer
)

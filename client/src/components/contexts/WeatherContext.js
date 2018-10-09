import axios from 'axios'
import React, { Component, createContext } from 'react'

const WeatherContext = createContext()

export class WeatherProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentWeather: {},
      forecast: [],
    }
  }

  componentDidMount() {
    axios.get(
      'http://localhost:3000'
      .concat('/api/weather')
    )
    .then(({ data }) => {
      this.setState({
        currentWeather: data[0],
        forecast: data.slice(1),
      })
    })
    .catch(error => {
      console.error(error)
    })

    setInterval(
      () => {
        axios.get(
          'http://localhost:3000'
          .concat('/api/weather')
        )
        .then(({ data }) => {
          this.setState({
            currentWeather: data[0],
            forecast: data.slice(1),
          })
        })
        .catch(error => {
          console.error(error)
        })
      },
      60000
    )
  }

  render() {
    return (
      <WeatherContext.Provider
        value={{
          currentWeather: (
            this.state.currentWeather
          ),
          forecast: (
            this.state.forecast
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

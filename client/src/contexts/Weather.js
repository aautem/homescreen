import { get } from 'axios'
import React, { Component, createContext } from 'react'

const apiAddress = 'http://localhost:3000/api/weather'
const fetchDelay = 300000
const WeatherContext = createContext()

export const WeatherInjector = (
  WeatherContext.Consumer
)

export class WeatherProvider extends Component {
  constructor(props) {
    super(props)
    this.fetchWeatherOnDelay = this.fetchWeatherOnDelay.bind(this)
    this.state = {
      currentWeather: {
        icon: '',
        summary: '',
        temperature: 0,
      },
      forecast: [],
    }
  }

  componentDidMount() {
    this.fetchWeatherOnDelay()
  }

  fetchWeatherOnDelay() {
    get(apiAddress)
    .then(({ data }) => {
      this.setState({
        currentWeather: data[0],
        forecast: data.slice(1),
      })
    })
    .catch(console.error)

    setTimeout(
      this.fetchWeatherOnDelay,
      fetchDelay,
    )
  }

  render() {
    return (
      <WeatherContext.Provider
        value={this.state}
      >
        {
          this
          .props
          .children
        }
      </WeatherContext.Provider>
    )
  }
}

// TODO: Update API response
//
// currentWeather = {
//   icon: 'clear-night',
//   summary: 'Clear',
//   temperature: 21.46,
// }

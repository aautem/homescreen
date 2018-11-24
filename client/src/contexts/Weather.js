import axios from 'axios'
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
      alerts: [],
      currently: {},
      daily: {},
      hourly: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    this.fetchWeatherOnDelay()
  }

  fetchWeatherOnDelay() {
    this.setState({
      isLoading: true,
    })

    axios
    .get(apiAddress)
    .then(({ data }) => {
      this.setState({
        alerts: data.alerts,
        currently: data.currently,
        daily: data.daily,
        hourly: data.hourly,
        isLoading: false,
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

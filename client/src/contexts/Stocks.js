import { get } from 'axios'
import React, { Component, createContext } from 'react'

// TODO: allow for custom symbols
const apiAddress = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=btcusdt,ethusdt,ltcusdt,oprx&types=quote'
const fetchDelay = 10000
const StocksContext = createContext()

export const StocksInjector = (
  StocksContext.Consumer
)

export class StocksProvider extends Component {
  constructor(props) {
    super(props)
    this.fetchStocksOnDelay = this.fetchStocksOnDelay.bind(this)
    this.state = { stocks: [] }
  }

  componentDidMount() {
    this.fetchStocksOnDelay()
  }

  fetchStocksOnDelay() {
    get(apiAddress)
    .then(({ data }) => {
      const stocks = (
        Object
        .keys(data)
        .map(key => data[key])
        .map(({ quote }) => quote)
      )

      this
      .setState({
        stocks,
      })
    })

    setTimeout(
      this.fetchStocksOnDelay,
      fetchDelay,
    )
  }

  render() {
    return (
      <StocksContext.Provider
        value={this.state}
      >
        {
            this
            .props
            .children
        }
      </StocksContext.Provider>
    )
  }
}

// https://api.iextrading.com/1.0/stock/BTCUSDT/quote
//
// {
//     "symbol":"BTCUSDT",
//     "companyName":"Bitcoin USD",
//     "primaryExchange":"crypto",
//     "sector":"cryptocurrency",
//     "calculationPrice":"realtime",
//     "open":6460.01,
//     "openTime":1542002292280,
//     "close":6447.82641146,
//     "closeTime":1542088692280,
//     "high":6483.93,
//     "low":6391.15,
//     "latestPrice":6463.57,
//     "latestSource":"Real time price",
//     "latestTime":"12:58:12 AM",
//     "latestUpdate":1542088692280,
//     "latestVolume":10855.545845,
//     "iexRealtimePrice":null,
//     "iexRealtimeSize":null,
//     "iexLastUpdated":null,
//     "delayedPrice":null,
//     "delayedPriceTime":null,
//     "extendedPrice":null,
//     "extendedChange":null,
//     "extendedChangePercent":null,
//     "extendedPriceTime":null,
//     "previousClose":6460.01,
//     "change":3.56,
//     "changePercent":0.00055,
//     "iexMarketPercent":null,
//     "iexVolume":null,
//     "avgTotalVolume":null,
//     "iexBidPrice":null,
//     "iexBidSize":null,
//     "iexAskPrice":null,
//     "iexAskSize":null,
//     "marketCap":null,
//     "peRatio":null,
//     "week52High":null,
//     "week52Low":null,
//     "ytdChange":null,
//     "bidPrice":6461.98,
//     "bidSize":0.12377,
//     "askPrice":6463.37,
//     "askSize":0.044664
// }

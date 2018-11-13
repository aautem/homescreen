import axios from 'axios'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import './StockPortfolio.css'

import Stock from './Stock'

const useStockPortfolio = () => {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        const fetchStocks = (
            setInterval(
                () => {
                    axios
                    .get(
                        'https://api.iextrading.com/1.0/stock/market/batch?symbols=btcusdt,ethusdt,ltcusdt,oprx&types=quote'
                    )
                    .then(({ data }) => {
                        setStocks(
                            Object
                            .keys(data)
                            .map(key => (
                                data[key]
                                .quote
                            ))
                        )
                    })
                },
                60000,
            )
        )

        return (
            () => {
                clearInterval(fetchStocks)
            }
        )
    })

    return stocks
}

const propTypes = {
    //
}

const StockPortfolio = () => {
    const portfolio = useStockPortfolio()

    return (
        <div className="StockPortfolio">
            {
                portfolio
                .map(stock => ({
                    ...stock,
                    symbol: (
                        stock
                        .symbol
                        .includes('USDT')
                        ? (
                            stock
                            .symbol
                            .replace(
                                'USDT',
                                '',
                            )
                        )
                        : (
                            stock
                            .symbol
                        )
                    ),
                }))
                .map(stock => (
                    <Stock
                        {...stock}
                        key={stock.symbol}
                    />
                ))
            }
        </div>
    )
}

StockPortfolio
.propTypes = propTypes

export default StockPortfolio

// https://api.iextrading.com/1.0/stock/BTCUSDT/quote
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
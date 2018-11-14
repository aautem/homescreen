// import PropTypes from 'prop-types'
import React from 'react'
import './StocksRow.css'

import Stock from './Stock'

import {
  StocksInjector,
  StocksProvider,
} from '../../contexts/Stocks'

const formatStockPrice = (
  ({ latestPrice }) => (
    latestPrice.toFixed(2)
  )
)

const formatStockSymbol = (
  ({ symbol }) => (
    symbol
    .replace(
      'USDT',
      '',
    )
  )
)

const StocksRow = () => (
  <StocksProvider>
    <StocksInjector>
      {({ stocks }) => (
        <div className="StocksRow">
          {
            stocks
            .map(stockInfo => ({
              ...stockInfo,
              latestPrice: (
                formatStockPrice(stockInfo)
              ),
              symbol: (
                formatStockSymbol(stockInfo)
              ),
            }))
            .map(stockInfo => (
              <Stock
                {...stockInfo}
                key={stockInfo.symbol}
              />
            ))
          }
        </div>
      )}
    </StocksInjector>
  </StocksProvider>
)

export default StocksRow

import React from 'react'

import './Stocks.css'

const mockStockData = [{
  company: 'TSLA',
  price: 271.36,
  low: 268.42,
  high: 274.03,
  currentReturn: '+$0.20 (+0.23%)',
  totalReturn: '+$8.92 (+11.52%)',
  isTrendingUp: false,
}, {
  company: 'OPRX',
  price: 17.27,
  low: 17.03,
  high: 17.34,
  currentReturn: '+$0.20 (+0.23%)',
  totalReturn: '+$8.92 (+11.52%)',
  isTrendingUp: true,
}, {
  company: 'BTC',
  price: 6617.58,
  low: 6432.89,
  high: 6847.29,
  currentReturn: '+$0.20 (+0.23%)',
  totalReturn: '+$8.92 (+11.52%)',
  isTrendingUp: true,
}, {
  company: 'AMZN',
  price: 1871.98,
  low: 1865.32,
  high: 1888.47,
  currentReturn: '+$0.20 (+0.23%)',
  totalReturn: '+$8.92 (+11.52%)',
  isTrendingUp: false,
}, {
  company: 'AAPL',
  price: 224.11,
  low: 222.17,
  high: 236.84,
  currentReturn: '+$0.20 (+0.23%)',
  totalReturn: '+$8.92 (+11.52%)',
  isTrendingUp: true,
}]

const Stocks = () => (
  <div className="Stocks">
    {
      mockStockData
      .map(({
        company,
        price,
        low,
        high,
        currentReturn,
        totalReturn,
        isTrendingUp,
      }) => (
        <div
          className="Stocks_individual"
          key={company}
          style={{
            border: (
              isTrendingUp
              ? '0.2rem solid #324b4a'
              : '0.2rem solid #c15c7f'
            )
          }}
        >
          <div
            className="Stocks_companyName"
            style={{
              backgroundImage: (
                isTrendingUp
                ? 'linear-gradient(to right, #324b4a, rgba(255, 255, 255, 0))'
                : 'linear-gradient(to right, #c15c7f, rgba(255, 255, 255, 0))'
              )
            }}
          >
            {company}
          </div>

          <div className="Stocks_price">
            <span>${price}</span>

            <div className="Stocks_records">
              <span className="Stocks_low">
                ${low}
              </span>
              <span className="Stocks_high">
                ${high}
              </span>
            </div>
          </div>

          <div
            className="Stocks_returns"
            style={{
              background: (
                isTrendingUp
                ? '#324b4a'
                : '#c15c7f'
              )
            }}
          >
            <span className="Stocks_return">
              {currentReturn}
            </span>

            <span className="Stocks_totalReturn">
              {totalReturn}
            </span>
          </div>
        </div>
      ))
    }
  </div>
)

export default Stocks

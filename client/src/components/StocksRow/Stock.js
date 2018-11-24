import PropTypes from 'prop-types'
import React from 'react'
import './Stock.sass'

const propTypes = {
  companyName: PropTypes.string.isRequired,
  high: PropTypes.number,
  latestPrice: PropTypes.string.isRequired,
  latestTime: PropTypes.string,
  low: PropTypes.number,
  symbol: PropTypes.string.isRequired,
}

const Stock = ({
  companyName,
  high,
  latestPrice,
  latestTime,
  low,
  symbol,
}) => (
  <div className="Stock">
    <div className="Stock_symbol">
      {symbol}
    </div>
    <div className="Stock_price">
      ${latestPrice}
    </div>
  </div>
)

Stock.propTypes = propTypes

export default Stock

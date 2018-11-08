import PropTypes from 'prop-types'
import React from 'react'
import './Stocks.css'

const propTypes = {
    //
}

const Stocks = () => (
    <div className="Stocks">
        <div className="Stocks_stock">
            BTC
        </div>
        <div className="Stocks_stock">
            ETH
        </div>
        <div className="Stocks_stock">
            LTC
        </div>
        <div className="Stocks_stock">
            OPRX
        </div>
    </div>
)

Stocks
.propTypes = propTypes

export default Stocks

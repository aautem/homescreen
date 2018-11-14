import PropTypes from 'prop-types'
import React from 'react'
import './StockPortfolio.css'

import Stock from './Stock'

import {
    StocksInjector,
    StocksProvider,
} from '../../contexts/Stocks'

const propTypes = {
    // TODO
}

const StockPortfolio = () => (
    <StocksProvider>
        <StocksInjector>
            {({ stocks }) => (
                <div className="StockPortfolio">
                    {
                        stocks
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
            )}
        </StocksInjector>
    </StocksProvider>
)

StockPortfolio.propTypes = propTypes

export default StockPortfolio

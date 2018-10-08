import React from 'react'

import './Stocks.css'

const Stocks = () => (
  <div className="Stocks">
    <div className="Stocks_individual">
      APPL
    </div>

    <div className="Stocks_individual">
      TSLA
    </div>

    <div className="Stocks_individual">
      BTC
    </div>

    <div className="Stocks_individual">
      <div className="Stocks_companyName">
        OPRX
      </div>

      <div className="Stocks_price">
        <span>$17.27</span>

        <div className="Stocks_records">
          <span className="Stocks_low">
            $17.03
          </span>
          <span className="Stocks_high">
            $17.34
          </span>
        </div>
      </div>

      <div className="Stocks_returns">
        <span className="Stocks_return">
          +$0.20 (+0.23%)
        </span>

        <span className="Stocks_totalReturn">
          +$8.92 (+11.52%)
        </span>
      </div>
    </div>

    <div className="Stocks_individual">
      AA
    </div>
  </div>
)

export default Stocks

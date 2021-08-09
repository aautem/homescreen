// import PropTypes from 'prop-types'
import React from "react";
import "./StocksRow.css";

import Stock from "./Stock";

import { StocksInjector, StocksProvider } from "../../contexts/Stocks";

const mockData = {
  stocks: [
    {
      latestPrice: 762,
      symbol: "TSLA",
    },
    {
      latestPrice: 4200,
      symbol: "ETH",
    },
    {
      latestPrice: 112462,
      symbol: "BTC",
    },
  ],
};

const formatStockPrice = ({ latestPrice }) =>
  latestPrice ? latestPrice.toFixed(2) : "0.00";

const formatStockSymbol = ({ symbol }) => symbol.replace("USDT", "");

const StocksRow = () => (
  <StocksProvider>
    <StocksInjector>
      {({ stocks }) => (
        <div className="StocksRow">
          {mockData.stocks
            .map((stockInfo) => ({
              ...stockInfo,
              latestPrice: formatStockPrice(stockInfo),
              symbol: formatStockSymbol(stockInfo),
            }))
            .map((stockInfo) => (
              <Stock {...stockInfo} key={stockInfo.symbol} />
            ))}
        </div>
      )}
    </StocksInjector>
  </StocksProvider>
);

export default StocksRow;

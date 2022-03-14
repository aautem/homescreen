import Stock from './Stock'

// TODO: build admin portal to configure these and fetch from API
const stocks = [
  { symbol: 'TSLA', type: 'stock' },
  { symbol: 'VOO', type: 'stock' },
  { symbol: 'GOOGL', type: 'stock' },
  { symbol: 'COIN', type: 'stock' },
  { symbol: 'AAPL', type: 'stock' },
  { symbol: 'RIVN', type: 'stock' },
  { symbol: 'AMZN', type: 'stock' },
  { symbol: 'ARKG', type: 'stock' },
  { symbol: 'ARKW', type: 'stock' },
  { symbol: 'ETH', type: 'crypto' },
  { symbol: 'ADA', type: 'crypto' },
  { symbol: 'BTC', type: 'crypto' },
]

const Stocks = () => {
  return (
    <div
      style={{
        background: 'rgb(80, 80, 80)',
        bottom: 0,
        columnGap: '2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        left: 0,
        padding: '0.5rem 1.5rem',
        position: 'absolute',
        right: '71%',
        top: '50%',
      }}
    >
      {stocks.map(s => (
        <Stock {...s} key={s.symbol} />
      ))}
    </div>
  )
}

export default Stocks

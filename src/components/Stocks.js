import Stock from './Stock'

// TODO: build admin portal to configure these and fetch from API
const stocks = [
  { symbol: 'TSLA', type: 'stock' },
  { symbol: 'VOO', type: 'stock' },
  { symbol: 'GOOGL', type: 'stock' },
  { symbol: 'MNMD', type: 'stock' },
  { symbol: 'COIN', type: 'stock' },
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: '75%',
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

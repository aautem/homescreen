import { useStock } from '../hooks/useStock'

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price ?? 0))
}

const Stock = ({ symbol, type }) => {
  const stockQuery = useStock({ type, symbol })
  if (stockQuery.isError) console.log({ error: stockQuery.error })

  const { current = '0', open = '0' } = stockQuery.data ?? {}
  const priceChange = current - open
  const percentageChange = ((priceChange / open) * 100).toFixed(2)
  const hasGain = priceChange > 0

  return (
    <div
      style={{
        columnGap: '1.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        marginBottom: '0.1rem',
        marginLeft: '-2rem',
      }}
    >
      <div
        style={{
          alignSelf: 'center',
          color: 'white',
          fontSize: '1.75rem',
          gridRow: '1 / 3',
          justifySelf: 'flex-end',
        }}
      >
        {symbol}
      </div>
      <div style={{ alignSelf: 'center', color: 'white', fontSize: '1.1rem' }}>
        {formatPrice(stockQuery.data?.current)}
      </div>
      <div
        style={{
          alignSelf: 'center',
          gridColumn: '2 / 3',
          color: hasGain ? '#3cb371' : 'pink',
          fontSize: '0.9rem',
        }}
      >
        {hasGain && '+'}
        {formatPrice(priceChange)}
        {' / '}
        {hasGain && '+'}
        {isNaN(percentageChange) ? '--' : percentageChange}%
      </div>
    </div>
  )
}

export default Stock

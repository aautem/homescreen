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
        columnGap: '1rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <div
        style={{
          alignSelf: 'end',
          color: 'white',
          fontSize: '1.25rem',
          justifySelf: 'end',
        }}
      >
        {symbol}
      </div>
      <div
        style={{
          alignSelf: 'end',
          color: 'white',
          fontSize: '1rem',
          justifySelf: 'start',
        }}
      >
        {formatPrice(stockQuery.data?.current)}
      </div>
      <div
        style={{
          alignSelf: 'start',
          color: hasGain ? '#3cb371' : 'pink',
          fontSize: '0.75rem',
          gridColumn: '1 / 3',
          justifySelf: 'center',
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
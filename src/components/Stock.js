import { useStock } from '../hooks/useStock'

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price ?? 0))
}

// const useStyles = makeStyles(theme => ({
//   gain: {
//     color: theme.palette.success.dark,
//   },
//   loss: {
//     color: theme.palette.error.dark,
//   },
//   paper: {
//     background: 'rgba(255, 255, 255, 0.9)',
//   },
// }))

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
        columnGap: '3rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        marginLeft: '-1rem',
      }}
    >
      <div
        style={{
          alignSelf: 'center',
          color: 'white',
          fontSize: '2.5rem',
          gridRow: '1 / 3',
          justifySelf: 'flex-end',
        }}
      >
        {symbol}
      </div>
      <div style={{ alignSelf: 'center', color: 'white', fontSize: '2rem' }}>
        {formatPrice(stockQuery.data?.current)}
      </div>
      <div
        style={{
          alignSelf: 'center',
          gridColumn: '2 / 3',
          color: hasGain ? '#3cb371' : 'pink',
          fontSize: '1.25rem',
        }}
      >
        {hasGain ? '+' : '-'}
        {formatPrice(priceChange)}
        {' / '}
        {hasGain ? '+' : '-'}
        {isNaN(percentageChange) ? '-' : percentageChange}%
      </div>
    </div>
  )
}

export default Stock

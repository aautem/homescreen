import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Stock from './Stock'

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
    <Box p="2em">
      <Grid container spacing={2} wrap="wrap-reverse">
        {stocks.map(s => (
          <Stock {...s} key={s.symbol} />
        ))}
      </Grid>
    </Box>
  )
}

export default Stocks

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useStock } from '../hooks/useStock'

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price ?? 0))
}

const useStyles = makeStyles(theme => ({
  gain: {
    color: theme.palette.success.dark,
  },
  loss: {
    color: theme.palette.error.dark,
  },
  paper: {
    background: 'rgba(255, 255, 255, 0.9)',
  },
}))

const Stock = ({ symbol, type }) => {
  const classes = useStyles()
  const stockQuery = useStock({ type, symbol })

  console.log({ stockQuery })

  if (stockQuery.isError) console.log({ error: stockQuery.error })

  const { current = '0', open = '0' } = stockQuery.data ?? {}
  const priceChange = current - open
  const percentageChange = ((priceChange / open) * 100).toFixed(2)
  const hasGain = priceChange > 0

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          p="0.5em"
        >
          <Typography variant="h4">{symbol}</Typography>
          <Box className={classes[hasGain ? 'gain' : 'loss']}>
            <Typography align="right" variant="h4">
              {formatPrice(stockQuery.data?.current)}
            </Typography>
            <Typography align="right">
              {hasGain ? '+' : '-'}
              {formatPrice(priceChange)}
              {' / '}
              {hasGain ? '+' : '-'}
              {isNaN(percentageChange) ? '-' : percentageChange}%
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default Stock

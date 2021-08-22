import { useQuery } from 'react-query'
import axios from 'axios'
import dayjs from 'dayjs'

const { REACT_APP_ALPHA_VANTAGE_API_KEY } = process.env
const baseUrl = 'https://www.alphavantage.co/query'

async function fetchStock({ type, symbol }) {
  const func = type === 'crypto' ? 'CRYPTO_INTRADAY' : 'TIME_SERIES_INTRADAY'
  const response = await axios.get(
    `${baseUrl}?function=${func}&symbol=${symbol}&market=USD&interval=60min&apikey=${REACT_APP_ALPHA_VANTAGE_API_KEY}`,
  )

  if (response.data.Note) {
    throw new Error(response.data.Note)
  }

  const typeKey =
    type === 'crypto' ? 'Time Series Crypto (60min)' : 'Time Series (60min)'

  const data = response.data[typeKey]
  const currentKey = Object.keys(data)[Object.keys(data).length - 1]
  let openKey = ''

  if (type === 'crypto') {
    openKey = `${dayjs().format('YYYY-MM-DD')} 00:00:00`
  } else {
    let attemptNumber = 0

    // No updates on weekends or holidays
    // Find most recent key for 05:00:00
    while (attemptNumber < 10) {
      const key = `${dayjs()
        .subtract(attemptNumber, 'day')
        .format('YYYY-MM-DD')} 05:00:00`

      if (data[key]) {
        openKey = key
        break
      }

      attemptNumber += 1
    }
  }

  if (!openKey) {
    throw new Error(`Unable to locate opening data for ${symbol}`)
  }

  // {
  //   "1. open": "3178.15000",
  //   "2. high": "3189.00000",
  //   "3. low": "3168.83000",
  //   "4. close": "3170.37000",
  //   "5. volume": 8073
  // }

  const result = {
    current: data[currentKey]['4. close'],
    open: data[openKey]['1. open'],
  }

  return result
}

export function useStock({ type, symbol }) {
  return useQuery(['stock', symbol], () => fetchStock({ type, symbol }), {
    retryDelay: 60 * 1000, // Limited to 5 API calls per minute, 500 per day
  })
}

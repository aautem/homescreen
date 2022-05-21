import { useQuery } from 'react-query'
import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

async function fetchCountdown() {
  const response = await axios.get(`${apiUrl}/countdown`)

  return response.data
}

export function useCountdown() {
  return useQuery(['countdown'], fetchCountdown, {
    refetchInterval: 60 * 1000 * 60, // 1 hour
  })
}

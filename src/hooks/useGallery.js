import { useQuery } from 'react-query'
import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

async function fetchGallery() {
  const response = await axios.get(`${apiUrl}/gallery`)

  return response.data
}

export function useGallery() {
  return useQuery(['gallery'], fetchGallery, {
    refetchInterval: 60 * 1000 * 60, // 1 hour
  })
}

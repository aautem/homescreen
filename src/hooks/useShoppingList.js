import axios from 'axios'
import { useQuery } from 'react-query'

const apiUrl = process.env.REACT_APP_API_URL

async function fetchShoppingList() {
  const response = await axios.get(`${apiUrl}/shopping`)

  return response.data.sort((a, b) => {
    if (a.priority > b.priority) return 1
    if (a.priority < b.priority) return -1
    return 0
  })
}

export function useShoppingList() {
  return useQuery(['shopping'], fetchShoppingList, {
    refetchInterval: 60 * 1000 * 5, // 5 minutes
  })
}

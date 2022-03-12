import axios from 'axios'
import { useQuery } from 'react-query'

const apiUrl = process.env.REACT_APP_API_URL

async function fetchTodos() {
  const response = await axios.get(`${apiUrl}/todos`)

  return response.data.sort((a, b) => {
    if (a.priority > b.priority) return 1
    if (a.priority < b.priority) return -1
    return 0
  })
}

export function useTodos() {
  return useQuery(['todos'], fetchTodos, {
    refetchInterval: 60 * 1000 * 5, // 5 minutes
  })
}

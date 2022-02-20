import { useShoppingList } from '../hooks/useShoppingList'
import List from './List'

const Shopping = () => {
  const listQuery = useShoppingList()

  return (
    <List
      background="rgb(210, 210, 210)"
      bottom={0}
      color="black"
      error={listQuery.error?.message}
      header="Shopping List"
      isLoading={listQuery.isLoading}
      items={listQuery.data ?? []}
      left="50%"
      right="25%"
      top="50%"
    />
  )
}

export default Shopping

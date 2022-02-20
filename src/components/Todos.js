import { useTodos } from '../hooks/useTodos'
import List from './List'

const Todos = () => {
  const todosQuery = useTodos()

  return (
    <List
      background="rgb(46, 139, 87)"
      bottom={0}
      color="white"
      error={todosQuery.error?.message}
      header="To-Do List"
      isLoading={todosQuery.isLoading}
      items={todosQuery.data ?? []}
      left="25%"
      right="50%"
      top="50%"
    />
  )
}

export default Todos

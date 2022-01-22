import List from './List'

// TODO: build admin portal to configure these and fetch from API
const todoList = [
  'washer/dryer pedestal',
  'crawl space bookshelf door',
  'electrical box door',
]

const Todos = () => {
  return (
    <List
      background="rgb(46, 139, 87)"
      bottom={0}
      color="white"
      header="To-Do List"
      items={todoList}
      left="25%"
      right="50%"
      top="50%"
    />
  )
}

export default Todos

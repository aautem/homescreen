import List from './List'

// TODO: build admin portal to configure these and fetch from API
const shoppingList = ['milk', 'cereal', 'pineapple']

const Shopping = () => {
  return (
    <List
      background="rgb(210, 210, 210)"
      bottom={0}
      color="black"
      header="Shopping List"
      items={shoppingList}
      left="50%"
      right="25%"
      top="50%"
    />
  )
}

export default Shopping

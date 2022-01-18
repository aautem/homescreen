import { Fragment } from 'react'

// TODO: build admin portal to configure these and fetch from API
const todoList = [
  'washer/dryer pedestal',
  'crawl space bookshelf door',
  'electrical box door',
]

const Todos = () => {
  return (
    <div
      style={{
        background: 'rgb(46, 139, 87)',
        bottom: 0,
        color: 'white',
        left: '25%',
        padding: '2rem',
        position: 'absolute',
        right: '50%',
        top: '50%',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>To-Do List</div>

      {todoList.map((todo, i) => (
        <Fragment key={i}>
          <div style={{ fontSize: '2.5rem', padding: '1rem 0' }}>{todo}</div>
          <div style={{ height: '1px', background: 'white' }} />
        </Fragment>
      ))}

      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0), rgb(46, 139, 87))',
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: '60%',
        }}
      />
    </div>
  )
}

export default Todos

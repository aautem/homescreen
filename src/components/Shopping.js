import { Fragment } from 'react'

// TODO: build admin portal to configure these and fetch from API
const shoppingList = ['milk', 'cereal', 'pineapple']

const Shopping = () => {
  return (
    <div
      style={{
        background: 'rgb(210, 210, 210)',
        bottom: '1rem',
        color: 'black',
        left: '51%',
        padding: '2rem',
        position: 'absolute',
        right: '26%',
        top: '50%',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Shopping List
      </div>

      {shoppingList.map((item, i) => (
        <Fragment key={i}>
          <div style={{ fontSize: '2.5rem', padding: '1rem 0' }}>{item}</div>
          <div style={{ height: '1px', background: 'black' }} />
        </Fragment>
      ))}

      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0), rgb(210, 210, 210))',
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

export default Shopping

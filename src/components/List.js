import { Fragment } from 'react'
import FadeOut from './FadeOut'

const List = ({
  background,
  bottom,
  color,
  error,
  header,
  isLoading,
  items,
  left,
  right,
  top,
}) => {
  return (
    <div
      style={{
        background,
        bottom,
        color,
        left,
        padding: '1rem 1.5rem',
        position: 'absolute',
        right,
        top,
      }}
    >
      <div style={{ fontSize: '1.75rem' }}>{header}</div>

      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div style={{ color: 'red' }}>{error}</div>}

      {items.map(i => (
        <Fragment key={i.id}>
          <div style={{ fontSize: '2.25rem', padding: '0.75rem 0' }}>
            {i.name}
          </div>
          <div style={{ height: '1px', background: color }} />
        </Fragment>
      ))}

      <FadeOut color={background} />
    </div>
  )
}

export default List

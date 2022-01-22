import { Fragment } from 'react'
import FadeOut from './FadeOut'

const List = ({
  background,
  bottom,
  color,
  header,
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

      {items.map((item, i) => (
        <Fragment key={i}>
          <div style={{ fontSize: '2.25rem', padding: '0.75rem 0' }}>
            {item}
          </div>
          <div style={{ height: '1px', background: color }} />
        </Fragment>
      ))}

      <FadeOut color={background} />
    </div>
  )
}

export default List

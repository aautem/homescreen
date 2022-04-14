const colors = {
  1: '#a4bdfc',
  2: '#7ae7bf',
  3: '#dbadff',
  4: '#ff887c',
  5: '#fbd75b',
  6: '#dc143c	',
  7: '#46d6db', // Default
  8: '#e1e1e1',
  9: '#5484ed',
  10: '#51b749',
  11: '#dc2127',
}

const ColorMarker = ({ colorId }) => {
  const background = colors[colorId] ?? colors[7]

  return (
    <div
      style={{
        background,
        borderRadius: '50%',
        height: '1rem',
        margin: '0 0.5rem 0 2rem',
        width: '1rem',
      }}
    />
  )
}

const Event = ({ colorId, displayTime, isInProgress, location, name }) => {
  const locationName = location?.split(',')[0]

  return (
    <>
      <div
        style={{
          alignItems: 'center',
          backgroundImage: isInProgress
            ? 'linear-gradient(to right, rgba(95, 158, 160, 0.8), rgba(95, 158, 160, 0.2))'
            : undefined,
          display: 'flex',
        }}
      >
        <ColorMarker colorId={colorId} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0.5rem',
          }}
        >
          <div style={{ fontSize: '1.25rem' }}>
            {displayTime}
            {locationName && ` (${locationName})`}
          </div>
          <div style={{ fontSize: '1.75rem' }}>{name}</div>
        </div>
      </div>

      <div style={{ height: '1px', background: 'white' }} />
    </>
  )
}

export default Event

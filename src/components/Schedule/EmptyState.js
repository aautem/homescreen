const EmptyState = ({ children }) => {
  return (
    <>
      <div style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 1.75rem' }}>
        {children}
      </div>
      <div style={{ height: '1px', background: 'white' }} />
    </>
  )
}

export default EmptyState

import React from 'react'

const Panel = ({ children, numberOfColumns }) => (
  <section
    className="Panel"
    style={{
      flex: `
        ${numberOfColumns} 1 auto
      `,
    }}
  >
    {children}
  </section>
)

export default Panel

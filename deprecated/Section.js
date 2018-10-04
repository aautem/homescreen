import React from 'react'

import './Section.css'

const Section = ({ backgroundImage, children, color, flexBasis, padding }) => (
  <section
    className="Section"
    style={{ backgroundImage: `url(${backgroundImage})`, flexBasis: `${flexBasis}%`, padding, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    {children}
  </section>
)

export default Section

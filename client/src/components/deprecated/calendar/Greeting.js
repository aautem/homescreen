import React from 'react'

import './Greeting.css'

const Greeting = () => (
  <div className="Greeting">
    <span>
      Good morning, Alex!
    </span>
    
    <span
      aria-label="emoji"
      className="Greeting_icon"
      role="img"
    >
      😎
    </span>
  </div>
)

export default Greeting

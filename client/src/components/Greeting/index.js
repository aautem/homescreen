import React from 'react'
import './Greeting.sass'

const Greeting = () => (
  <div className="Greeting">
    <div className="Greeting_text">
      Good Morning, Alex
      <span
        aria-labelledby="emoji"
        className="Greeting_icon"
        role="img"
      >
        👽
      </span>
    </div>
  </div>
)

export default Greeting

import React from 'react'
import { FaRegSmile } from 'react-icons/fa'

import './Greeting.css'

const Greeting = () => (
  <div className="Greeting">
    Good morning, Alex!
    <FaRegSmile
      className="Greeting_emoji"
      color="#0c7e7d"
    />
  </div>
)

export default Greeting

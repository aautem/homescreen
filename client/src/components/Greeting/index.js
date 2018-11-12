import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './Greeting.css'

const propTypes = {
    //
}

const Greeting = () => {
    const [name, setName] = useState('Alex')

    return (
        <div className="Greeting">
            <div className="Greeting_text">
                Good Morning, {name}
            </div>
        </div>
    )
}

Greeting
.propTypes = propTypes

export default Greeting

import PropTypes from 'prop-types'
import React from 'react'
import './Greeting.css'

const propTypes = {
    //
}

const Greeting = () => (
    <div className="Greeting">
        <div className="Greeting_text">
            Good Morning, Alex
        </div>
    </div>
)

Greeting
.propTypes = propTypes

export default Greeting

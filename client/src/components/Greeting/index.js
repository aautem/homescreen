import PropTypes from 'prop-types'
import React from 'react'
import './Greeting.css'

const propTypes = {
    //
}

const Greeting = () => (
    <div className="Greeting">
        Good Morning, Alex
    </div>
)

Greeting
.propTypes = propTypes

export default Greeting

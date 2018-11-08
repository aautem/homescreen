import PropTypes from 'prop-types'
import React from 'react'
import './Clock.css'

const propTypes = {
    //
}

const Clock = () => (
    <div className="Clock">
        <div className="Clock_text">
            1:21 am
        </div>
    </div>
)

Clock
.propTypes = propTypes

export default Clock

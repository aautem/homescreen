import PropTypes from 'prop-types'
import React from 'react'
import './Today.css'

import Date from './Date'
import CurrentWeather from './CurrentWeather'

const propTypes = {
    //
}

const Today = () => (
    <div className="Today">
        <Date />
        <CurrentWeather />
    </div>
)

Today
.propTypes = propTypes

export default Today

import PropTypes from 'prop-types'
import React from 'react'
import './CurrentWeather.css'

import { FiSun } from 'react-icons/fi'

const propTypes = {
    //
}

const CurrentWeather = () => (
    <div className="CurrentWeather">
        <div className="CurrentWeather_temperature">
            72°
        </div>

        <div className="CurrentWeather_icon">
            <FiSun size={40} />
        </div>

        {/* <div className="CurrentWeather_extremeTemperatures">
            56 F / 75 F
        </div>
        
        <div className="CurrentWeather_summary">
            Sunny Skies
        </div>
        <div className="CurrentWeather_icon">
            Icon
        </div> */}
    </div>
)

CurrentWeather
.propTypes = propTypes

export default CurrentWeather

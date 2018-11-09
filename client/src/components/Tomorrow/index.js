import PropTypes from 'prop-types'
import React from 'react'
import './Tomorrow.css'

const propTypes = {
    //
}

const Tomorrow = () => (
    <div className="Tomorrow">
        <div className="Tomorrow_content">

            <div className="Tomorrow_temperature">
                72°
            </div>

            <div className="Tomorrow_labels">

                <div className="Tomorrow_topLabel">
                    Tonight
                </div>

                <div className="Tomorrow_bottomLabel">
                    Tomorrow
                </div>
                
            </div>

            <div className="Tomorrow_icon">
                Icon
            </div>

        </div>
    </div>
)

Tomorrow
.propTypes = propTypes

export default Tomorrow

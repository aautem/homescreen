import PropTypes from 'prop-types'
import React from 'react'
import './Calendar.css'

const propTypes = {
    //
}

const Calendar = () => (
    <div className="Calendar">
        <div className="Calendar_events">
            Events
        </div>
        <div className="Calendar_happeningSoon">
            Happening Soon
        </div>
    </div>
)

Calendar
.propTypes = propTypes

export default Calendar

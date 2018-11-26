import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'
import './Event.css'

const Event = ({
  description,
  location,
  start,
  summary,
}) => (
  <div className="Event">
    <div className="Event_time">
      {
        start
        .dateTime
        ? (
          format(
            start.dateTime,
            'h:mma',
          )
        )
        : 'All-Day'
      }
    </div>

    <div className="Event_summary">
      <div className="Event_title">
        {summary}
      </div>

      {
        location
        && (
          <div className="Event_location">
            {location}
          </div>
        )
      }

      {
        description
        && (
          <div className="Event_description">
            {description}
          </div>
        )
      }
    </div>
  </div>
)

Event.propTypes = {
  description: PropTypes.string,
  location: PropTypes.string,
  start: (
    PropTypes
    .shape({
      date: PropTypes.string,
      dateTime: PropTypes.string,
    })
    .isRequired
  ),
  summary: PropTypes.string.isRequired,
}

export default Event

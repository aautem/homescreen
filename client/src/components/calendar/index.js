import React from "react";
import "./Calendar.css";

import Event from "./Event";

import { CalendarInjector, CalendarProvider } from "../../contexts/Calendar";

const mockData = {
  isLoading: false,
  events: [
    {
      id: "00sma1pl43r9kalima4hpuriqd_20181121T133000Z",
      colorId: "9",
      description:
        "Surprise party, please do not ruin it for anyone, especially mike.",
      location: "New York, NY",
      start: { date: "2021-07-12" },
      summary: "Mike Birthday Party",
    },
    {
      id: "00sma1pl43r9kalima4hpuriqd_20181121T133000Z",
      colorId: "9",
      description:
        "Surprise party, please do not ruin it for anyone, especially mike.",
      location: "New York, NY",
      start: { date: "2021-07-12" },
      summary: "Mike Birthday Party",
    },
    {
      id: "00sma1pl43r9kalima4hpuriqd_20181121T133000Z",
      colorId: "9",
      description:
        "Surprise party, please do not ruin it for anyone, especially mike.",
      location: "New York, NY",
      start: { date: "2021-07-12" },
      summary: "Mike Birthday Party",
    },
  ],
};

const Calendar = () => (
  <CalendarProvider>
    <div className="Calendar">
      <div className="Calendar_content">
        <div className="Calendar_events">
          <CalendarInjector>
            {({ events }) =>
              mockData.events.map(({ id, ...event }) => (
                <Event key={id} {...event} />
              ))
            }
          </CalendarInjector>
        </div>

        <div className="Calendar_happeningSoon">Happening Soon</div>
      </div>
    </div>
  </CalendarProvider>
);

export default Calendar;

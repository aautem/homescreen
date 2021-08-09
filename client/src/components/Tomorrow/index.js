import React from "react";
import renderWeatherIcon from "../../utils/renderWeatherIcon";
import "./Tomorrow.css";

// import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { WeatherInjector } from "../../contexts/Weather";

const mockData = {
  daily: {
    icon: "clear-day",
    summary: "Very sunny, get ya sunscreen!",
  },
  hourly: {
    icon: "clear-day",
    summary: "Very sunny, get ya sunscreen!",
  },
  isLoading: false,
};

const Tomorrow = () => (
  <WeatherInjector>
    {({ daily, hourly, isLoading }) =>
      console.log({ daily, hourly }) || (
        <div className="Tomorrow">
          <div className="Tomorrow_content">
            <div className="Tomorrow_temperature">
              {!mockData.isLoading && renderWeatherIcon(mockData.hourly)}
            </div>
            <div className="Tomorrow_labels">
              <div className="Tomorrow_topLabel">
                {mockData.hourly.summary}

                {/* <FiChevronsLeft />
              Tonight */}
              </div>
              <div className="Tomorrow_bottomLabel">
                {mockData.daily.summary}

                {/* Tomorrow
              <FiChevronsRight /> */}
              </div>
            </div>
            <div className="Tomorrow_icon">
              {!mockData.isLoading && renderWeatherIcon(mockData.daily)}
            </div>
          </div>
        </div>
      )
    }
  </WeatherInjector>
);

export default Tomorrow;

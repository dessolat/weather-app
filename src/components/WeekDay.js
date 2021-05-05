import React from 'react';
import PropTypes from 'prop-types';

const WeekDay = ({ dayData }) => {
  const { dt, weather } = dayData;
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const fullDate = new Date(dt * 1000);
  
	return (
    <div className='week__day'>
      <div className='week__day-header'>
        <span className='week__day-date'>{fullDate.getDate()}</span>
        <span className='week__day-day'>{DAYS[fullDate.getDay()].slice(0, 3)}</span>
      </div>
      <div className='week__day-body'>
        <img
          className='week__day-image'
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt=''
        />
        <span className='week__day-temp'>{`${Math.round(dayData.temp.day)}°C`}</span>
      </div>
    </div>
  );
};

WeekDay.propTypes = {
  dayData: PropTypes.object.isRequired
};

export default WeekDay;

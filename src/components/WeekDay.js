import React from 'react';

const WeekDay = ({ dayData, DAYS }) => {
  const { dt, weather } = dayData;
  const fullDate = new Date(dt * 1000);

  return (
    <div className='week__day'>
      <div className='week__day-header'>
        <span className='week__day-date'>{fullDate.getDate()}</span>
        <span className='week__day-day'>{DAYS[fullDate.getDay()].slice(0,3)}</span>
      </div>
      <div className='week__day-body'>
        <img className='week__day-image' src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt=''/>
        <span className='week__day-temp'>{`${Math.round(dayData.temp.day)}°C`}</span>
      </div>
    </div>
  );
};

export default WeekDay;

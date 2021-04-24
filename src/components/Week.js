import React from 'react';
import WeekDay from './WeekDay';

const Week = ({ weekData, DAYS }) => (
  <div className='week'>
    {weekData.daily.map(day => (
      <WeekDay key={day.dt} dayData={day} DAYS={DAYS} timezone={weekData.timezone_offset} />
    ))}
  </div>
);

export default Week;

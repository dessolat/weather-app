import React, { memo } from 'react';
import WeekDay from './WeekDay';
import PropTypes from 'prop-types';

const Week = ({ weekData }) => (
  <div className='week'>
    {weekData.daily.map(day => (
      <WeekDay key={day.dt} dayData={day} timezone={weekData.timezone_offset} />
    ))}
  </div>
);

Week.propTypes = {
  weekData: PropTypes.object.isRequired
};

export default memo(Week);

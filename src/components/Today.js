import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Today = ({ weatherData }) => {
  const { date, sys, name, weather, main } = weatherData;
	const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	
  return (
    <div className='today'>
      <div className='today__header'>
        <span className='today__header-title'>
          {`${MONTHS[date.getMonth()]}, ${date.getDate()}`}
        </span>
        <span className='today__header-today today__header-title'>
          {`${name}`} <sup>{`${sys.country}`}</sup>
        </span>
        <span className='today__header-title'>{DAYS[date.getDay()]}</span>
      </div>
      <div className='today__body'>
        <img
          className='today__body-image'
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt=''
        />
        <div className='today__body-temps'>
          <div className='today__body-temp'>{`${Math.round(main.temp)}°C`}</div>
          <div className='today__body-feeltemp'>{`Feels like ${Math.round(
            main.feels_like
          )}°C`}</div>
        </div>
        <span className='today__body-conditions'>{`${weather[0].main}`}</span>
      </div>
    </div>
  );
};

Today.propTypes = {
	date: PropTypes.instanceOf(Date),
	sys: PropTypes.object, 
	name: PropTypes.string, 
	weather: PropTypes.array, 
	main: PropTypes.object
}

export default memo(Today);

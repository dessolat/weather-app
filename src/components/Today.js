import React from 'react';

const Today = ({ weatherData, DAYS, MONTHS }) => {
  const { date, sys, name, weather, main } = weatherData;

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
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
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

export default Today;

import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import Today from './components/Today';
import Week from './components/Week';

import './App.css';

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

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function App() {
  const [input, setInput] = useState('');
  const [userLocation, setUserLocation] = useState({
    lat: null,
    long: null
  });
  const [userWeatherData, setUserWeatherData] = useState({ now: null, week: null });
  const [selectedWeatherData, setSelectedWeatherData] = useState({ now: null, week: null });

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    const { lat, long } = userLocation;
    lat !== null && long !== null && getWeather(null, true);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude: lat, longitude: long } = pos.coords;
          setUserLocation({
            lat,
            long
          });
        },
        err => {
          throw err;
        }
      );
    }
  };

  const handleInput = e => setInput(e.target.value);

  const getWeather = async (e, isCurrentLocation) => {
    e && e.preventDefault();

    const API_Key = '529c3904f06a70b46ab233d16d1f4eb5';
    const URL = 'https://api.openweathermap.org/data/2.5/weather';

    let response = isCurrentLocation
      ? await fetch(
          `${URL}?lat=${userLocation.lat}&lon=${userLocation.long}&appid=${API_Key}&units=metric`
        )
      : await fetch(`${URL}?q=${input}&appid=${API_Key}&units=metric`);
    if (response.ok) {
      let data = await response.json();
      const { lon, lat } = data.coord;
      const fullDate = new Date(data.dt * 1000);
      isCurrentLocation
        ? setUserWeatherData({ ...data, date: fullDate })
        : setSelectedWeatherData({ ...data, date: fullDate });
      const URL = 'https://api.openweathermap.org/data/2.5/onecall';

      response = await fetch(
        `${URL}?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${API_Key}&units=metric`
      );
      if (response.ok) {
        data = await response.json();
        isCurrentLocation
          ? setUserWeatherData(prevData => ({ ...prevData, week: data }))
          : setSelectedWeatherData(prevData => ({ ...prevData, week: data }));
      } else {
        throw response;
      }
    } else {
      throw response;
    }
  };

  return (
    <div className='wrapper'>
      <InputForm getWeather={getWeather} handleInput={handleInput} input={input} />

      {selectedWeatherData.week && (
        <>
          <Today weatherData={selectedWeatherData} DAYS={DAYS} MONTHS={MONTHS} />
          <Week weekData={selectedWeatherData.week} DAYS={DAYS} />
        </>
      )}

      {userWeatherData.week && (
        <>
          <h2>Your location</h2>
					<Today weatherData={userWeatherData} DAYS={DAYS} MONTHS={MONTHS} />
          <Week weekData={userWeatherData.week} DAYS={DAYS} />
        </>
      )}
    </div>
  );
}

export default App;

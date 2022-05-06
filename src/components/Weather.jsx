import React, { useState, useEffect } from 'react';
import { weatherView } from '../weather';
const Weather = () => {
  const [res, setRes] = useState({});

  const getWeather = async () => {
    const result = await weatherView();
    setRes([(result.data.main.temp - 273.15).toFixed(1), result.data.weather[0].icon]);
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      {<img src={`http://openweathermap.org/img/wn/${res[1]}@2x.png`} alt="weather" />}
      {res[0]}
    </div>
  );
};

export default Weather;

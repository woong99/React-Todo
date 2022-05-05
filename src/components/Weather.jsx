import React, { useState, useEffect } from 'react';
import { weatherView } from '../weather';
const Weather = () => {
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState();
  const getWeather = async () => {
    const result = await weatherView();
    console.log(result.data);
    setWeather(result.data.weather[0].icon);
    setTemp((result.data.main.temp - 273.15).toFixed(1));
  };
  useEffect(() => {
    getWeather();
  }, [weather]);
  // getWeather();
  return (
    <div>
      {/* <img src={`http://openweathermap.org/img/wn/${weather}@2x.png`} alt="weather" />
      {temp} */}
    </div>
  );
};

export default Weather;

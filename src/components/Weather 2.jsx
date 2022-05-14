import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Weather.module.css';
import Loading from './Loading';
const Weather = () => {
  const [temp, setTemp] = useState();
  const [icon, setIcon] = useState();

  const [loading, setLoading] = useState(true);

  const handleGeoSucc = async (pos) => {
    console.log(pos);
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    getWeather(lat, lon);
  };
  const handleGeoErr = () => {
    console.log('err');
  };
  const requestCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
  };

  const getWeather = (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
      .then((response) => {
        console.log(response);
        setTemp(response.data.main.temp);
        setIcon(response.data.weather[0].icon);
        setLoading(false);
      });
  };
  useEffect(() => {
    requestCoords();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather"
            className={styles.icon}
          />
          <p>{temp}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

import React from 'react';
import styles from '../styles/Weather.module.css';
import Loading from './Loading';
import useWeather from '../hooks/useWeather';
const Weather = () => {
  const { temp, icon, loading } = useWeather();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather" />
          <p>{temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

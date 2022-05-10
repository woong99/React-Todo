import React from 'react';
import styles from '../styles/Weather.module.css';
import Loading from './Loading';
import useWeather from '../hooks/useWeather';
const Weather = () => {
  const { temp, icon, loading } = useWeather();
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

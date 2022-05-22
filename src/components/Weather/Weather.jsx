import React from 'react';
import styles from './Weather.module.scss';
import Loading from '../Loading/Loading';
import useWeather from '../../hooks/useWeather';
const Weather = () => {
  const { temp, icon, loading } = useWeather();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather" width="50px" />
          <p>{temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

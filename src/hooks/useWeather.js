import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useWeather() {
  const [temp, setTemp] = useState();
  const [icon, setIcon] = useState();
  const [loading, setLoading] = useState(true);

  const handleGeoSucc = async (pos) => {
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
        setTemp(parseInt(response.data.main.temp - 273.15));
        setIcon(response.data.weather[0].icon);
        setLoading(false);
      });
  };
  useEffect(() => {
    requestCoords();
  }, []);

  return { temp, icon, loading };
}

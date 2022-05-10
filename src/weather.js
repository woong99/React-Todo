import axios from 'axios';
// import { getLocation } from './location';
import useCurrentLocation from './hooks/useCurrentPosition';
import { getLocation } from './loc';
import { useState } from 'react';
export function weatherView() {
  const [coords, saveCoords] = useState;
}
function requestCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucc, onGeoError);
}
function handleGeoSucc(pos) {
  console.log(pos);
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
}
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  const request = axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then((response) => {
      console.log(response);
      return response;
    });
  return request;
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

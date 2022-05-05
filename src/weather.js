import axios from 'axios';
export function weatherView(props) {
  const city = 'Seoul';
  const key = '2d51fc8dc32922fc30c560a09ae44fb3';
  const request = axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then((response) => {
      console.log(response);
      return response;
    });
  return request;
}

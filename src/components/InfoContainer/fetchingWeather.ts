import { useState } from "react";
import { useWeatherStore } from "../../data/stores/useWeatherStore";

export const geolocationWeather = (cityName: string) => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  let [temp, feelsLike, tempMin, tempMax, pressure, humidity, weather, windSpeed, windGust, windDeg] = useWeatherStore((state) => [
    state.tempUpdate, state.feelsLikeUpdate, state.tempMinUpdate, state.tempMaxUpdate, state.pressureUpdate,
    state.humidityUpdate, state.weatherUpdate, state.windSpeedUpdate, state.windGustUpdate, state.windDegUpdate])
  // fetching City locale
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=2c81922c9126916fefef76d02f47ca4f`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      //console.log(data)
      setLat(data[0].lat)
      setLon(data[0].lon)
    })
    .catch((error) => console.error('Error:', error))
  // fetching weather on locale
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily,minutely&appid=2c81922c9126916fefef76d02f47ca4f`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      //console.log(data)
      temp(data.main.temp)
      feelsLike(data.main.feels_like)
      tempMin(data.main.temp_min)
      tempMax(data.main.temp_max)
      pressure(data.main.pressure)
      humidity(data.main.humidity)
      weather(data.weather[0].description)
      windSpeed(data.wind.Speed)
      windGust(data.wind.gust)
      windDeg(data.wind.deg)
    })
    .catch((error) => console.error('Error:', error))
}


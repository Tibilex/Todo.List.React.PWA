import React from "react";
import { ContainerLabel } from "../ContainerLabel/containerLabel";
import styles from "./weatherContainer.module.scss";

export const WeatherContainer: React.FC = () => {
  //geolocationWeather('Kyiv')
  /*
  const [temp, feelsLike, tempMin, tempMax, pressure, humidity, weather, windSpeed] = useWeatherStore((state) => [
  state.temp, state.feelsLike, state.tempMin, state.tempMax, state.pressure,
  state.humidity, state.weather, state.windSpeed])
  let [temp2, feelsLike2, tempMin2, tempMax2, pressure2, humidity2, weather2, windSpeed2] = useWeatherStore((state) => [
    state.tempUpdate, state.feelsLikeUpdate, state.tempMinUpdate, state.tempMaxUpdate, state.pressureUpdate,
    state.humidityUpdate, state.weatherUpdate, state.windSpeedUpdate])

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Kyiv&limit=4&appid=2c81922c9126916fefef76d02f47ca4f`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      //console.log(data)
      setLat(data[0].lat)
      setLon(data[0].lon)
    })
    .catch((error) => console.error('Error:', error))
    //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=2c81922c9126916fefef76d02f47ca4f`)
    fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&cnt=1&appid=2c81922c9126916fefef76d02f47ca4f`)  
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      
      temp2(data.main.temp)
      feelsLike2(data.main.feels_like)
      tempMin2(data.main.temp_min)
      tempMax2(data.main.temp_max)
      pressure2(data.main.pressure)
      humidity2(data.main.humidity)
      weather2(data.weather[0].description)
      windSpeed2(data.wind.Speed)
     
    })
    .catch((error) => console.error('Error:', error))
    }, 600000);
      return () => clearInterval(interval);
  })
    
*/
  return (
    <section className={styles.weatherContainer}>
      <ContainerLabel title='Time date zone'/>
      {/*
      <div>temp:{temp}</div>
      <div>feelsLike:{feelsLike}</div>
      <div>tempMin:{tempMin}</div>
      <div>tempMax:{tempMax}</div>
      <div>pressure:{pressure}</div>
      <div>humidity:{humidity}</div>
      <div>weather:{weather}</div>
      <div>windSpeed:{windSpeed}</div>
    */}
    </section>
  )
}
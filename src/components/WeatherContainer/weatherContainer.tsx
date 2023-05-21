import React from "react";
import { useWeatherStore } from "../../data/stores/useWeatherStore";
import { ContainerLabel } from "../ContainerLabel/containerLabel";
import { geolocationWeather } from "../InfoContainer/fetchingWeather";
import styles from "./weatherContainer.module.scss";

export const WeatherContainer: React.FC = () => {
  //geolocationWeather('Kyiv')
  const [temp, feelsLike, tempMin, tempMax, pressure, humidity, weather, windSpeed, windGust, windDeg] = useWeatherStore((state) => [
    state.temp, state.feelsLike, state.tempMin, state.tempMax, state.pressure,
    state.humidity, state.weather, state.windSpeed, state.windGust, state.windDeg])

  return (
    <section className={styles.weatherContainer}>
      <ContainerLabel title='Time date zone'/>
      <div>temp:{temp}</div>
      <div>feelsLike:{feelsLike}</div>
      <div>tempMin:{tempMin}</div>
      <div>tempMax:{tempMax}</div>
      <div>pressure:{pressure}</div>
      <div>humidity:{humidity}</div>
      <div>weather:{weather}</div>
      <div>windSpeed:{windSpeed}</div>
      <div>windGust:{windGust}</div>
      <div>windDeg:{windDeg}</div>
    </section>
  )
}
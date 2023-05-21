import { create } from "zustand";

interface WeatherStore {
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  weather: string;
  windSpeed: number;
  windGust: number;
  windDeg: number;
  tempUpdate: (num: number) => void;
  feelsLikeUpdate: (feels: number) => void;
  tempMinUpdate: (Min: number) => void;
  tempMaxUpdate: (Max: number) => void;
  pressureUpdate: (pressure: number) => void;
  humidityUpdate: (humidity: number) => void; //влажность
  weatherUpdate: (weather: string) => void;
  windSpeedUpdate: (windSpeed: number) => void;
  windGustUpdate: (windGust: number) => void;
  windDegUpdate: (windDeg: number) => void;

}

export const useWeatherStore = create<WeatherStore>((set, get) => ({
  temp: 0,
  feelsLike: 0,
  tempMin: 0,
  tempMax: 0,
  pressure: 0,
  humidity: 0,
  weather: "string",
  windSpeed: 0,
  windGust: 0,
  windDeg: 0,
  tempUpdate: (num) => { set({ temp: num }) },
  feelsLikeUpdate: (num) => { set({ feelsLike: num }) },
  tempMinUpdate: (num) => { set({ tempMin: num }) },
  tempMaxUpdate: (num) => { set({ tempMax: num }) },
  pressureUpdate: (num) => { set({ pressure: num }) },
  humidityUpdate: (num) => { set({ humidity: num }) },
  weatherUpdate: (str) => { set({ weather: str }) },
  windSpeedUpdate: (num) => { set({ windSpeed: num }) },
  windGustUpdate: (num) => { set({ windGust: num }) },
  windDegUpdate: (num) => { set({ windDeg: num }) },
}))

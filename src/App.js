import Background from './components/Background';
import Header from './components/Header';
import WeatherDayTabs from './components/WeatherDayTabs';
import { useState, useEffect, /*useCallback*/ } from 'react';
import SearchBar from './components/SearchBar';
import Events from './components/Events';

function App() {

  //Use State Hook
  const [weather, updWeather] = useState({});
  const [picQuery, updPicQuery] = useState('los angeles');

  //Effect Hook
  useEffect(() => {

  }, []);

  const getWeather = async (location) => {
    console.log('getWeatherLocation: ', location);
    updPicQuery(location);
    const weatherData = await fetchWeather(location);
    console.log('weatherData: ', weatherData);
    updWeather(weatherData);
  };

  //fetch weatherapi.com API
  const fetchWeather = async (location) => {

    console.log('fetchWeather location: ', location);
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e1612587cc4f411b99243952212409&q&q=${location}&days=10&aqi=yes&alerts=yes`);
    const data = await res.json();
    console.log('Weather Data: ', data);
    return data;

  }

  return (
    <div className="App">
      <Background pictureQuery={picQuery} />
      <Header />
      <WeatherDayTabs tabs={weather} />
      <SearchBar locationQuery={getWeather} />
      <Events />
    </div>
  );
}

export default App;

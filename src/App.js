import './App.css';
import React, { useState, useEffect } from 'react';
import { getWeatherData } from "./Data/weatherdetails";

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("karachi");
  // const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data)
    }
    catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <div className="card">
        <h2 className='title'><i className='fa fa-cloud'></i>Weather Information</h2>
        <div className='search-form'>
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder='Enter Your City.....' />
          <button type='button' onClick={() => getData()}>Search</button>
        </div>
        {weatherdata !== null ? (
          <div className='main-container'>
            <h4>Live Weather Condition</h4>
            <div className='weather-icon'>
             <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt = "cutekitten"/>
            </div>
            <h3>{weatherdata.weather[0].main}</h3>
            <div className='temperature'>
              <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1) }&deg;C</h1>
            </div>
            <div className='location'>
              <h3> {weatherdata.name}| {weatherdata.sys.country}</h3>
            </div>
            <div className='temperature-range'>
              <h6> Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1) }&deg;C || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1) }&deg;C || Humidity: {weatherdata.main.humidity }%</h6>
            </div>
          </div>) : null}

      </div>

    </div>
  );
}

export default App;

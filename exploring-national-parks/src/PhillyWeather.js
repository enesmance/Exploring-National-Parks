import React from 'react'
import FetchWeather from './PhillyWeather/Components/fetchweather.jsx';
import "./Style/fetchweather.css"
const PhillyWeather = () => {
  return (
    <div className="philly-weather">
        <FetchWeather />
    </div>
  )
}

export default PhillyWeather;
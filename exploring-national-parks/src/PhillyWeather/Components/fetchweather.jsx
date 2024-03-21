import React, { useEffect, useState } from 'react';

function WeatherForecast() {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        fetchWeatherForecast();
    }, []);

    const fetchWeatherForecast = () => {
        const url = 'https://api.weather.gov/gridpoints/PHI/77,51/forecast'; // URL for Philadelphia forecast
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const forecastData = data.properties.periods.slice(0, 14); // Get the next 7 days forecast
                setForecast(forecastData);
            })
            .catch(error => {
                console.error('There was a problem fetching the weather forecast:', error);
            });
    };

    return (
        <div>
            <h1>7-Day Weather Forecast for Philadelphia</h1>
            <div id="forecast-container">
                {forecast.map((day, index) => (
                    <div key={index} className="forecast-card">
                        <h3>{day.name}</h3>
                        <p>{day.shortForecast}</p>
                        <p>Temperature: {day.temperature}{day.temperatureUnit}</p>
                        <p>Wind: {day.windSpeed}, {day.windDirection}</p>
                        <p>Humidity: {day.relativeHumidity.value}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherForecast;

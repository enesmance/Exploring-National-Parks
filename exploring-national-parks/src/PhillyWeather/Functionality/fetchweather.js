// Function to fetch the 7-day weather forecast for Philadelphia using weather.gov API
function fetchWeatherForecast() {
    const url = 'https://api.weather.gov/gridpoints/PHI/77,51/forecast'; // URL for Philadelphia forecast
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const forecast = data.properties.periods.slice(0, 14); // Get the next 7 days forecast
            displayWeatherForecast(forecast);
        })
        .catch(error => {
            console.error('There was a problem fetching the weather forecast:', error);
        });
}

// Function to display the 7-day weather forecast
function displayWeatherForecast(forecast) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // Clear previous forecast data
    forecast.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
            <h3>${day.name}</h3>
            <p>${day.shortForecast}</p>
            <p>Temperature: ${day.temperature}${day.temperatureUnit}</p>
            <p>Wind: ${day.windSpeed}, ${day.windDirection}</p>
            <p>Humidity: ${day.relativeHumidity.value}%</p>
        `;
        forecastContainer.appendChild(forecastCard);
    });
}

// Call the fetchWeatherForecast function to initiate fetching and displaying the forecast
fetchWeatherForecast();

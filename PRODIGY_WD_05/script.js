document.getElementById('searchbutton').addEventListener('click', function() {
    const city = document.getElementById('cityinput').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

document.getElementById('cityinput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const city = document.getElementById('cityinput').value;
        if (city) {
            getWeather(city);
        } else {
            alert('Please enter a city name');
        }
    }
});

function getWeather(city) {
    const apiKey = '9df73f83950583d5165dc35eeda73f16';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod === 200) {
                document.getElementById('weather-result').classList.remove('hidden');
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = data.weather[0].description;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
             }
             else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data');
        });
}

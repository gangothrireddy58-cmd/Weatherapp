async function getWeather() {
    const cityName = document.getElementById("city").value;
    const apiKey = "6034abc84c2f18d703e517e85333125d";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod == "404") {
        document.getElementById("result").innerHTML = "Invalid City Name!";
        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
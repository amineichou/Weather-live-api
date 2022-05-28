// express , axios , cheerio

const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()


const autoWeather = {
    weatherValueInC: "",
    weatherValueInF: "",
    time: "",
    location: "",
    description: "",
    wind: "",
    Humidity: '',
}

axios.get('https://weather.com/weather/today')
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)

        $('span.CurrentConditions--tempValue--3a50n:contains("°")', html).each(function () {
            const weatherValueInC = parseInt($(this).text());
            const weatherValueInF = Math.floor((parseInt(weatherValueInC) * 9 / 5) + 32);
            autoWeather.weatherValueInC = weatherValueInC + '°C';
            autoWeather.weatherValueInF = weatherValueInF + '°F';
        })
        $('span.CurrentConditions--timestamp--23dfw:contains("")', html).each(function () {
            const time = $(this).text();
            autoWeather.time = time;
        })
        $('h1.CurrentConditions--location--kyTeL:contains("")', html).each(function () {
            const location = $(this).text();
            autoWeather.location = location;
        })
        $('div.CurrentConditions--phraseValue--2Z18W:contains("")', html).each(function () {
            const description = $(this).text();
            autoWeather.description = description;
        })
        $('span.Wind--windWrapper--3aqXJ.undefined:contains("")', html).each(function () {
            const wind = $(this).text();
            autoWeather.wind = wind.replace(/\D/g, '') + " Km/h";
        })
        $('div.WeatherDetailsListItem--wxData--2s6HT:contains("%")', html).each(function () {
            const Humidity = $(this).text();
            autoWeather.Humidity = Humidity;
        })
    })

app.get('/', (req, res) => {
    res.json('Welcome to weather today API. Go to /autoWeather ')
})

app.get('/autoWeather', (req, res) => {
    res.json(autoWeather)
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
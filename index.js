// express , axios , cheerio , cros

const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
const { request } = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }))

app.use(
    cors({
        origin: "*",
    })
)


const autoWeather = {
    weatherValueInC: "",
    weatherValueInF: "",
    time: "",
    location: "",
    description: "",
    wind: "",
    Humidity: "",
    pressure: "",
}


const getCurrentWeather = (coords) => {
    axios.get(`https://weather.com/weather/today/l/${coords}/?unit=m`)
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
        $('div.WeatherDetailsListItem--wxData--2s6HT:contains("km/h")', html).each(function () {
            const wind = $(this).text();
            autoWeather.wind = wind.replace(/\D/g, '') + " Km/h";
        })
        $('div.WeatherDetailsListItem--wxData--2s6HT:contains("%")', html).each(function () {
            const Humidity = $(this).text();
            autoWeather.Humidity = Humidity;
        })
        $('span.Pressure--pressureWrapper--3UYAZ:contains("")', html).each(function () {
            const pressure = $(this).text();
            autoWeather.pressure = pressure.replace('Arrow Up', '').replace('Arrow Down', '');
        })
    })
}


app.get('/', (req, res) => {
    res.json('Welcome to weather today API. Go to /manuWeather/(city coordinates here)')
})

app.get('/manuWeather/:id', (req, res) => {
    getCurrentWeather(req.params.id);
    res.json(autoWeather);
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
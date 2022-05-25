// express , axios , cheerio

const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

const autoWeather = []

axios.get('https://weather.com/weather/today')
    .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)

        $('span.CurrentConditions--tempValue--3a50n:contains("°")', html).each(function () {
            const weatherValueInC = parseInt($(this).text())
            const weatherValueInF = Math.floor((parseInt(weatherValueInC) * 9 / 5) + 32)
            autoWeather.push({
                weatherValueInC: weatherValueInC + '°C',
                weatherValueInF: weatherValueInF + '°F',
            })
        })
        $('h1.CurrentConditions--location--kyTeL:contains("")', html).each(function () {
            const location = $(this).text()
            autoWeather.push({
                location,
            })
        })
        $('div.CurrentConditions--phraseValue--2Z18W:contains("")', html).each(function () {
            const description = $(this).text()
            autoWeather.push({
                description,
            })
        })
        $('span.Wind--windWrapper--3aqXJ:contains("")', html).each(function () {
            const wind = $(this).text()
            autoWeather.push({
                wind,
            })
        })
        $('div.WeatherDetailsListItem--wxData--2s6HT:contains("%")', html).each(function () {
            const Humidity = $(this).text()
            autoWeather.push({
                Humidity,
            })
        })
    })

app.get('/', (req, res) => {
    res.json('Welcome to weather today API. Go to /autoWeather ')
})

app.get('/autoWeather', (req, res) => {
    res.json(autoWeather)
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
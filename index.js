// express , axios , cheerio , cros

const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
// const { request } = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }))

app.use(
    cors({
        origin: "*",
    })
)


let weatherData = [];



axios.get('https://www.timeanddate.com/weather/?continent=africa&low=1')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('tbody>tr', html).each(function () {
            var a = $(this);
            let city = a.find('td>a').eq(0).text();
            let temperature = a.find('td.rbi').eq(0).text();
            let icon = a.find('td.r').find('img').eq(0).attr('src');
            weatherData.push(
                {
                    "city": city,
                    "temperature": temperature,
                    "icon": icon
                }
            )
            let city_1 = a.find('td>a').eq(1).text();
            let temperature_1 = a.find('td.rbi').eq(1).text();
            let icon_1 = a.find('td.r').find('img').eq(1).attr('src');
            weatherData.push(
                {
                    "city": city_1,
                    "temperature": temperature_1,
                    "icon": icon_1
                }
            )
            // let city_2 = a.find('td>a').eq(2).text();
            // let temperature_2 = a.find('td.rbi').eq(2).text();
            // let icon_2 = a.find('td.r').find('img').eq(2).attr('src');
            // weatherData.push(
            //     {
            //         "city": city_2,
            //         "temperature": temperature_2,
            //         "icon": icon_2
            //     }
            // )
        })
    })
axios.get('https://www.timeanddate.com/weather/?continent=samerica&low=1')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('tbody>tr', html).each(function () {
            var a = $(this);
            let city = a.find('td>a').eq(0).text();
            let temperature = a.find('td.rbi').eq(0).text();
            let icon = a.find('td.r').find('img').eq(0).attr('src');
            weatherData.push(
                {
                    "city": city,
                    "temperature": temperature,
                    "icon": icon
                }
            )
            let city_1 = a.find('td>a').eq(1).text();
            let temperature_1 = a.find('td.rbi').eq(1).text();
            let icon_1 = a.find('td.r').find('img').eq(1).attr('src');
            weatherData.push(
                {
                    "city": city_1,
                    "temperature": temperature_1,
                    "icon": icon_1
                }
            )
            // let city_2 = a.find('td>a').eq(2).text();
            // let temperature_2 = a.find('td.rbi').eq(2).text();
            // let icon_2 = a.find('td.r').find('img').eq(2).attr('src');
            // weatherData.push(
            //     {
            //         "city": city_2,
            //         "temperature": temperature_2,
            //         "icon": icon_2
            //     }
            // )
        })
    })
axios.get('https://www.timeanddate.com/weather/?continent=asia')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('tbody>tr', html).each(function () {
            var a = $(this);
            let city = a.find('td>a').eq(0).text();
            let temperature = a.find('td.rbi').eq(0).text();
            let icon = a.find('td.r').find('img').eq(0).attr('src');
            weatherData.push(
                {
                    "city": city,
                    "temperature": temperature,
                    "icon": icon
                }
            )
            let city_1 = a.find('td>a').eq(1).text();
            let temperature_1 = a.find('td.rbi').eq(1).text();
            let icon_1 = a.find('td.r').find('img').eq(1).attr('src');
            weatherData.push(
                {
                    "city": city_1,
                    "temperature": temperature_1,
                    "icon": icon_1
                }
            )
            // let city_2 = a.find('td>a').eq(2).text();
            // let temperature_2 = a.find('td.rbi').eq(2).text();
            // let icon_2 = a.find('td.r').find('img').eq(2).attr('src');
            // weatherData.push(
            //     {
            //         "city": city_2,
            //         "temperature": temperature_2,
            //         "icon": icon_2
            //     }
            // )
        })
    })
axios.get('https://www.timeanddate.com/weather/?continent=australasia')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('tbody>tr', html).each(function () {
            var a = $(this);
            let city = a.find('td>a').eq(0).text();
            let temperature = a.find('td.rbi').eq(0).text();
            let icon = a.find('td.r').find('img').eq(0).attr('src');
            weatherData.push(
                {
                    "city": city,
                    "temperature": temperature,
                    "icon": icon
                }
            )
            let city_1 = a.find('td>a').eq(1).text();
            let temperature_1 = a.find('td.rbi').eq(1).text();
            let icon_1 = a.find('td.r').find('img').eq(1).attr('src');
            weatherData.push(
                {
                    "city": city_1,
                    "temperature": temperature_1,
                    "icon": icon_1
                }
            )
            // let city_2 = a.find('td>a').eq(2).text();
            // let temperature_2 = a.find('td.rbi').eq(2).text();
            // let icon_2 = a.find('td.r').find('img').eq(2).attr('src');
            // weatherData.push(
            //     {
            //         "city": city_2,
            //         "temperature": temperature_2,
            //         "icon": icon_2
            //     }
            // )
        })
    })
axios.get('https://www.timeanddate.com/weather/?continent=europe')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('tbody>tr', html).each(function () {
            var a = $(this);
            let city = a.find('td>a').eq(0).text();
            let temperature = a.find('td.rbi').eq(0).text();
            let icon = a.find('td.r').find('img').eq(0).attr('src');
            weatherData.push(
                {
                    "city": city,
                    "temperature": temperature,
                    "icon": icon
                }
            )
            let city_1 = a.find('td>a').eq(1).text();
            let temperature_1 = a.find('td.rbi').eq(1).text();
            let icon_1 = a.find('td.r').find('img').eq(1).attr('src');
            weatherData.push(
                {
                    "city": city_1,
                    "temperature": temperature_1,
                    "icon": icon_1
                }
            )
            // let city_2 = a.find('td>a').eq(2).text();
            // let temperature_2 = a.find('td.rbi').eq(2).text();
            // let icon_2 = a.find('td.r').find('img').eq(2).attr('src');
            // weatherData.push(
            //     {
            //         "city": city_2,
            //         "temperature": temperature_2,
            //         "icon": icon_2
            //     }
            // )
        })
    })


app.get('/', (req, res) => {
    res.json('Welcome to weather today API. Go to /get')
})

app.get('/get', (req, res) => {
    res.json(weatherData);
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
import axios from 'axios'
import moment from 'moment/moment'

const apiKey = 'bbf5947563682b7c072e5d9861b27bb7'

const getWeatherData = async (city) => {
    let response

    if (city.q) {
        response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.q}&units=metric&appid=${apiKey}`
        )
    } else {
        response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`
        )
    }

    return filterData(response.data)
}

const filterData = (data) => {
    const {
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data

    const { main: details, icon } = weather[0]

    return {
        temp,
        feels_like,
        temp_max,
        temp_min,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    }
}

const weatherIcons = (image) =>
    `http://openweathermap.org/img/wn/${image}@2x.png`

const cleanDate = (dt) => {
    return moment(dt * 1000).format('dddd, MMMM D YYYY')
}

const cleanTime = (dt) => {
    return moment(dt * 1000).format('h:mm A')
}

export default getWeatherData
export { weatherIcons, cleanDate, cleanTime }

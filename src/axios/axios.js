import axios from 'axios'

let APIKey = process.env.REACT_APP_API_KEY

let lat = 32.975540
let lon = -96.889793
let units = 'imperial'
const weatherURL = () => {
  return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${units}`
}

let countryCode = 'us'
let zipCode = 80014;
let coordinateURL = () => {
  return `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${APIKey}`
} 

let zipCodeKey = process.env.REACT_APP_ZIP_API_KEY
let zipCodeURL = () => {
  return `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lon}&key=${zipCodeKey}&pretty=1`
}

export async function UpdateLatAndLon (newLat, newLon) {
    lat = newLat 
    lon = newLon
}

export async function getWeatherData() {
    try {
        const data = await axios.get(weatherURL())
        return data.data
    } catch (error) {
        return {health: false}
    }
}

export async function getCoordinates(zip) {
    try {
        if(zip) zipCode = zip
        let data = await axios.get(coordinateURL())
        lat = data.data.lat
        lon = data.data.lon
        return data.data 
    } catch (error) {
        return{health: false}
    }
}

export async function getZipFromLatAndLon() {
    try {
        const data = await axios.get(zipCodeURL())
        return data.data.results[0].components.postcode
    } catch (error) {
        return {health: false}
    }
}
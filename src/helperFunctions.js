import SevenDayForcast from "./SevenDayForcast"
import sunIcon from './photos/sunIcon.png'
import snowingIcon from './photos/snowingIcon.png'
import rainyIcon from './photos/rainyIcon.png'
import cloudyIcon from './photos/cloudyIcon.png'

export const reconfigureRainChance = (pop) => {
  let rainChance = 0
  if(pop === 1) rainChance = 100
  if(pop === 0) rainChance = 0
  if(pop > 0 && pop < 1) rainChance = pop.toString().split('.')[1]
  return rainChance
}

export const makeValuesUseable = (data) => {
  data.daily.forEach((day, index) => {
    day.dt = new Date(day.dt * 1000).toString().slice(0,3)
    day.temp.max = Math.floor(day.temp.max)
    day.temp.min = Math.floor(day.temp.min)
    day.pop = reconfigureRainChance(day.pop)
  })
}

export const setDefaultPreferences = () => {
  return({
    pop: 0,
    low: 60,
    zip: 75006
  })
}

export const comparePreferences = (preferences, selectedDay) => {
  if(preferences.pop >= selectedDay.pop && preferences.low <= selectedDay.temp.min) return true
}

export const setBackGroundColor = (day) => {
  let description = day.weather[0].main
  if(description === 'Rain'){
    return 'rainy-background'
  }
  if(description === 'Clouds'){
    return 'cloudy-background'
  }
  if(description === 'Clear') {
    return 'sunny-background'
  }
  if(description === 'Snow') {
    return 'snowy-background'
  }
}

export const getFullDaysName = (day) => {
  if(day.dt === 'Mon') return 'Monday'
  if(day.dt === 'Tue') return 'Tuesday'
  if(day.dt === 'Wed') return 'Wednsday'
  if(day.dt === 'Thu') return 'Thursday'
  if(day.dt === 'Fri') return 'Friday'
  if(day.dt === 'Sat') return 'Saturday'
  if(day.dt === 'Sun') return 'Sunday'
}

export const makeHourlyUsable = (hour, index) => {
  if(index > 23) return null
    hour.dt = new Date(hour.dt * 1000).toString().slice(16,18)
    let time
    let ender = 'AM'
    if(hour.dt === '0'){
      time = hour.dt.slice(1)
    } else {
      time = hour.dt
    }
      time = Number(time)
    if(time > 12){
      time -= 12
      ender = 'PM'
    }
    if(time === 0){
      time = 12
    }
  hour.ender = ender
  return time  
}

export const setWeatherIcon = (day) => {
  let description = day.weather[0].main
  if(description === 'Rain'){
    return rainyIcon
  }
  if(description === 'Clouds'){
    return cloudyIcon
  }
  if(description === 'Clear') {
    return sunIcon
  }
  if(description === 'Snow') {
    return snowingIcon
  }
}

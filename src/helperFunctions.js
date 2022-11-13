import SevenDayForcast from "./SevenDayForcast"

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
  if(day.dt === 'Sat') return 'Saterday'
  if(day.dt === 'Sun') return 'Sunday'
}

  
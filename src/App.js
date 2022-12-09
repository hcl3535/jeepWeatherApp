import { useEffect, useState } from 'react';
import './App.css';
import { getCoordinates, getWeatherData, getZipFromLatAndLon, UpdateLatAndLon } from './axios/axios';
import Settings from './settings';
import { makeValuesUseable, setBackGroundColor, setBackgroundColor, setBackgroundColorForSelected, setDefaultPreferences } from './helperFunctions';
import SelectedDay from './selectedDay';
import SevenDayForcast from './SevenDayForcast';
import Hourly from './hourly';
import NavBar from './navBar';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [currentWeatherData , setCurrentWeatherData] = useState({})
  const [selectedDay, setSelectedDay] = useState({})
  const [preferences, setPreferences] = useState({})
  const [city, setCity] = useState('Carrollton')

useEffect(() => {
  const setWeatherData = async () => {
    setPreferences(setDefaultPreferences())
    const locationData = await getCoordinates(preferences.zip)
    setCity(locationData.name)
    const data = await getWeatherData()
    makeValuesUseable(data)
    setCurrentWeatherData(data)
    setSelectedDay(data.daily[0])
    setBackGroundColor(data.daily[0])
    navigator.geolocation.getCurrentPosition(async(event) => {
      updateBasedOnPermisiveLocation(event)
    }, console.log)
  }
  setWeatherData()
},[])

 const changeSelectedDay = (day) => {
  setSelectedDay(day)
  setBackGroundColor(day)
 }

 const changePreferences = async (popPreference, lowPreference, zipPreference) =>{
  if(!popPreference) popPreference = preferences.pop;
  if(!lowPreference) lowPreference = preferences.low;
  if(!zipPreference) zipPreference = preferences.zip;
  let newPreferences = {pop: popPreference, low:lowPreference, zip: zipPreference}
  setPreferences(newPreferences)
  const locationData = await getCoordinates(newPreferences.zip)
  setCity(locationData.name)
  const data = await getWeatherData()
  makeValuesUseable(data)
  setCurrentWeatherData(data)
  setSelectedDay(data.daily[0])
 }

 const updateBasedOnPermisiveLocation = async (event) => {
  UpdateLatAndLon(event.coords.latitude, event.coords.longitude)
      let newZip = await getZipFromLatAndLon()
      changePreferences(preferences.pop, preferences.low, newZip )
 }

  return (
      <div id='base'>
        <Settings preferences={preferences} changePreferences={changePreferences} city={city}/>
        <SelectedDay selectedDay={selectedDay} preferences={preferences}/>
        <SevenDayForcast currentWeatherData={currentWeatherData} changeSelectedDay={changeSelectedDay}/>
        <Hourly currentWeatherData={currentWeatherData}/>
      </div>
  );
}

export default App;

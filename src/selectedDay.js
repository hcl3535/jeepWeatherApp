import React, { useEffect } from "react";
import { comparePreferences, getFullDaysName, setBackGroundColor } from "./helperFunctions";
import jeepTopOff from './photos/jeepTopOff.png'
import jeepTopOn from'./photos/jeepTopOn.png'
import rainDrop from './photos/rain drop 1.png'
import snowFlake from './photos/snowflake hunter1.png'

const SelectedDay = (props) => {
    
    const {selectedDay, preferences} = props
    let photo = jeepTopOn;
    let weatherIcon = rainDrop

    if(selectedDay.temp){ 

    if(comparePreferences(preferences, selectedDay)) photo = jeepTopOff

    let condition = setBackGroundColor(selectedDay)
    let element = document.getElementById('base')
    element.className = ''
    element.classList.add(condition)
    let fullDaysName = getFullDaysName(selectedDay)
    if(condition === 'snowy-background') weatherIcon = snowFlake;
    console.log(condition)

      return(
        <div className={`flex border horizontalCentered selected border-radius-1 flex-column`}>
          <div>
            <div className="horizontalCentered title">{fullDaysName}</div>
            <div className="margin-top-5 margin-left-5">
              <div className="selectedDay-item margin-left-2">{selectedDay.temp.max}&#8457;</div>
              <div className="selectedDay-item margin-left-2">{selectedDay.temp.min}&#8457;</div>
              <div className="flex-row flex">
                <img src={weatherIcon} alt='' className="rain-snow-icon"></img>
                <div className="selectedDay-item">{selectedDay.pop}%</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={photo} alt='' className="imgSize imgCenter"></img>
          </div>
        </div>
      )
    }
}

export default SelectedDay
import React from "react";
import { setBackGroundColor, setBackGroundColorForSevenDay } from "./helperFunctions";

const SevenDayForcast = (props) =>{

    const {currentWeatherData, changeSelectedDay} = props

    if(currentWeatherData.daily){
      return(
        <div className='flex size horizontalCentered margin-top-2'>
          {currentWeatherData?.daily.map((day, index) => {
            if(index > 6) return null
            let condition = setBackGroundColor(day)
            return(
              <div key={index} className={`border horizontalCentered margin border-radius-0 ${condition}`} onClick={() =>{
                changeSelectedDay(day)
                }}> 
                <div className="horizontalCentered">{day.dt}</div>
                <div className="horizontalCentered">high {day.temp.max}</div>
                <div className="horizontalCentered">low {day.temp.min}</div>
                <div className="horizontalCentered">{day.pop}%</div>
              </div>
            )
          })} 
        </div>
      )
    }
}

export default SevenDayForcast;
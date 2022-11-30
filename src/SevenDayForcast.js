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
                <div className="horizontalCentered margin-left-2">{day.dt}</div>
                <div className="horizontalCentered margin-top-1 margin-left-2">{day.temp.max}&#8457;</div>
                <div className="horizontalCentered margin-left-2">{day.temp.min}&#8457;</div>
                <div className="horizontalCentered margin-top-1 margin-left-2">{day.pop}%</div>
              </div>
            )
          })} 
        </div>
      )
    }
}

export default SevenDayForcast;
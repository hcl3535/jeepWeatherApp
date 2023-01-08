import React from "react";
import { setBackGroundColor, setBackGroundColorForSevenDay } from "./helperFunctions";

const SevenDayForcast = (props) =>{

    const {currentWeatherData, changeSelectedDay} = props

    if(currentWeatherData.daily){
      return(
        <div className='flex size horizontalCentered margin-top-2 relative'>
          {currentWeatherData?.daily.map((day, index) => {
            if(index > 6) return null
            let condition = setBackGroundColor(day)
            return(
              <div key={index} className={`border horizontalCentered margin border-radius-0 item ${condition}`} onClick={() =>{
                changeSelectedDay(day)
                }}> 
                <div className="horizontalCentered individual-day">{day.dt}</div>
                <div className="horizontalCentered margin-top-1 individual-day">{day.temp.max}&#8457;</div>
                <div className="horizontalCentered individual-day">{day.temp.min}&#8457;</div>
                <div className="horizontalCentered margin-top-1 individual-day">{day.pop}%</div>
              </div>
            )
          })} 
        </div>
      )
    }
}

export default SevenDayForcast;
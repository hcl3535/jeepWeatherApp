import React from "react";
import { convertToStandardTime} from "./helperFunctions";

const Hourly = (props) => {

    const {currentWeatherData} = props;
    let hours = currentWeatherData.hourly

    return (
        <div className="flex border border-radius-1 hourly-size horizontalCentered margin-top-2 overflow-scroll">
            {hours?.map((hour, index) => {
                if(index > 23) return null
                hours.dt = new Date(hour.dt * 1000).toString().slice(16,18)
                let time
                let ender = 'AM'
                if(hours.dt[0] === '0'){
                  time = hours.dt.slice(1)
                } else {
                  time = hours.dt
                }
                time = Number(time)
                if(time > 12){
                  time -= 12
                  ender = 'PM'
                } 
                return(
                    <div key={index} className="margin margin-left-2">
                        <div className="time-size">
                            {time}{ender}
                        </div>    
                        <div className="horizontalCentered">
                            {hour.pop}
                        </div>
                        <div className="horizontalCentered">
                          {hour.temp}
                        </div>  
                    </div>  
                )
            })}
        </div>
    )
}

export default Hourly
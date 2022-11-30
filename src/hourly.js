import {React, memo} from "react";
import { convertToStandardTime, makeHourlyUsable, reconfigureRainChance, setBackGroundColor} from "./helperFunctions";
import rainDrop from './photos/rain drop 1.png'
import snowFlake from './photos/snowflake hunter1.png'


const Hourly = (props) => {

    const {currentWeatherData} = props;
    let hours = currentWeatherData.hourly
    let weatherIcon = rainDrop
    console.log(currentWeatherData)

    return (
        <div className="flex border border-radius-1 hourly-size horizontalCentered margin-top-2 overflow-scroll">
            {hours?.map((hour, index) => {
                hour.dt = makeHourlyUsable(hour, index)
                hour.pop = reconfigureRainChance(hour.pop)
                hour.temp = Math.floor(hour.temp)
                let condition = setBackGroundColor(hour)
                if(condition === 'snowy-background') weatherIcon = snowFlake;
                if(index > 23) return null
                return(
                    <div key={index} className="margin margin-left-2">
                        <div className="time-size">
                            {hour.dt}{hour.ender}
                        </div>    
                        <div className="flex font-size-med margin-top-2">
                            <img src={weatherIcon} className="rain-snow-icon"></img>
                            {hour.pop}%
                        </div>
                        <div className="horizontalCentered font-size-med margin-left-2 margin-top-2">
                          {hour.temp}&#8457;
                        </div>  
                    </div>  
                )
            })}
        </div>
    )
}

export default memo(Hourly)
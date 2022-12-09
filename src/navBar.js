import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate()

  function switchToWeather () {
    navigate('/')
  }

  function switchToTrailGuide () {
    navigate('/trailGiude')
  }

    return(
      <nav className="flex NavBar">
          <div 
            className="border time-size Nav-Item text-align-center vertical-centered"
            onClick={switchToWeather}
            >
              Weather
            </div>
          <div 
          className="border time-size Nav-Item text-align-center vertical-centered"
          onClick={switchToTrailGuide}
          >
          Trail Guide
          </div>   
      </nav>
    )
}

export default NavBar;
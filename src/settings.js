import React, { useState } from "react";

const Settings = (props) => {

  const {preferences, changePreferences, city} = props;

  const [popPreference, setPopPreference] = useState(0)
  const [lowPreference, setLowPreference] = useState(60)
  const [zipPreference, setZipPreference] = useState(75006)

  const handlePopChange = (e) => {
    setPopPreference(e.target.value)
  }

  const handleLowChange = (e) => {
    setLowPreference(e.target.value)
  }

  const handleZipChange = (e) => {
    setZipPreference(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    changePreferences(popPreference, lowPreference, zipPreference)
  }

  return(
  <form className="top-nav z-order-1" onSubmit={handleSubmit}>
    <div>{city}</div>    
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu z-4">
      <li>
        <div className="horizontalCentered">preferences</div>
        <div>
            <div>chance of rain</div>
            <input type='textbox' onChange={handlePopChange} value={popPreference}></input>
        </div>
        <div>
            <div>low</div>
            <input type='textbox' onChange={handleLowChange} value={lowPreference}></input>
        </div>
        <div>
            <div>zip-code</div>
            <input type='textbox' onChange={handleZipChange} value={zipPreference}></input>
        </div>
        <button>submit</button>
      </li>
    </ul>
  </form>
  )
}

export default Settings
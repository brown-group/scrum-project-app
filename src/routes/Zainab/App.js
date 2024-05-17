import React, { useState } from 'react'  // Importing React and useState hook from 'react'
import axios from 'axios'  // Importing axios for making HTTP requests
import './index.css'  // Importing the CSS file for styling

function App() {  // Defining the main App component
  const [data, setData] = useState({})  // useState hook to manage the weather data, initialized as an empty object
  const [location, setLocation] = useState('')  // useState hook to manage the location input, initialized as an empty string

  // URL for the OpenWeatherMap API, using the location state and API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1f0b749728e2addfd301aa22dfb75f13`

  // Function to handle search when the user presses Enter
  const searchLocation = (event) => {
    if (event.key === 'Enter') {  // Check if the key pressed is 'Enter'
      axios.get(url).then((response) => {  // Make a GET request to the API
        setData(response.data)  // Update the data state with the response data
      })
      setLocation('')  // Reset the location input
    }
  }

  return (
    <div className="app" id='Zwraper'>  
      <div className="search"> 
        <input
          value={location}  // Bind input value to location state
          onChange={event => setLocation(event.target.value)}  // Update location state on input change
          onKeyPress={searchLocation}  // Trigger searchLocation on key press
          placeholder='Enter Location'  // Placeholder text for the input
          type="text"  // Input type is text
        />
      </div>
      <div className="container"> 
        <div className="top">  
          <div className="location">
            <p className='date-P'>{data.name}</p>  
          </div>
          <div className="temp">
            {
            
            /* Display temperature in Celsius if available, convert from Fahrenheit */}
            {data.main ? <h1 className='tempTitle'>{((data.main.temp - 32) * 5/9).toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {
            /* Display weather description if available */}
            {data.weather ? <p className = 'date-P' >{data.weather[0].main}</p> : null}
          </div>
        </div>

        {
        
        /* Display additional weather details if location data is available */}
        {data.name !== undefined &&
          <div className="bottom">
            <div className="humidity">
              {
              /* Display humidity if available */}
              {
              data.main ? <p className='bold date-P'>Humidity {data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              {
              /* Display wind speed if available */}
              {
              data.wind ? <p className='bold date-P'> Wind Speed {data.wind.speed.toFixed()} MPH</p> : null}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;  // Exporting the App component as the default export

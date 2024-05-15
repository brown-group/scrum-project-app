import React, { useState } from 'react'
import axios from 'axios'
import './index.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1f0b749728e2addfd301aa22dfb75f13`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{((data.main.temp - 32) * 5/9).toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="humidity">
              {data.main ? <p className='bold'>Humidity {data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'> Wind Speed {data.wind.speed.toFixed()} MPH</p> : null}
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import "./predictcontainer.css";

const PredictContainer = (props) => {
  const [weatherData, setWeatherData] = useState({
    // ... (unchanged)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWeatherData({
      ...weatherData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    // You can use the weatherData state for further processing
  };

  const windDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  return (
    <div className='predictcontainer'>
      <div className='heading2'>Predict on {props.modelname}</div>
      <form className='box' onSubmit={handleSubmit}>
        <div className='left'>
            <label htmlFor="minTemperature">Minimum Temperature:</label>
            <input type="text" id="minTemperature" name="minTemperature" value={weatherData.minTemperature} onChange={handleInputChange} />

            <label htmlFor="minTemperature">Minimum Temperature:</label>
            <input type="text" id="minTemperature" name="minTemperature" value={weatherData.minTemperature} onChange={handleInputChange} />

            <label htmlFor="maxTemperature">Maximum Temperature:</label>
            <input type="text" id="maxTemperature" name="maxTemperature" value={weatherData.maxTemperature} onChange={handleInputChange} />

            <label htmlFor="rainfall">Rainfall:</label>
            <input type="text" id="rainfall" name="rainfall" value={weatherData.rainfall} onChange={handleInputChange} />

            <label htmlFor="evaporation">Evaporation:</label>
            <input type="text" id="evaporation" name="evaporation" value={weatherData.evaporation} onChange={handleInputChange} />

            <label htmlFor="sunshine">Sunshine:</label>
            <input type="text" id="sunshine" name="sunshine" value={weatherData.sunshine} onChange={handleInputChange} />

            <label htmlFor="windGustDirection">Wind Gust Direction:</label>
            <input type="text" id="windGustDirection" name="windGustDirection" value={weatherData.windGustDirection} onChange={handleInputChange} />

            <label htmlFor="windGustSpeed">Wind Gust Speed:</label>
            <input type="text" id="windGustSpeed" name="windGustSpeed" value={weatherData.windGustSpeed} onChange={handleInputChange} />

        </div>

        <div className='middle'>

          <label htmlFor="windGustSpeed">Wind Gust Speed:</label>
          <input type="text" id="windGustSpeed" name="windGustSpeed" value={weatherData.windGustSpeed} onChange={handleInputChange} />

          <label htmlFor="windDirection9am">Wind Direction at 9am:</label>
          <select
            id="windDirection9am"
            name="windDirection9am"
            value={weatherData.windDirection9am}
            onChange={handleInputChange}
          >
            {windDirections.map((direction) => (
              <option key={direction} value={direction}>
                {direction}
              </option>
            ))}
          </select>

          <div className='buttondiv'>
            <button className='buttonp' type="submit">Predict</button>
          </div>

        </div>

        <div className='right'>
          <div className='predicted-results'>
            <h2>Predicted Results</h2>
            <div className='predprec'>34%</div>
            <div>Chances of cloudburst</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PredictContainer;

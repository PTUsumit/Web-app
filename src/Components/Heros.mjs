import React, { useState } from 'react';
import Features1 from './Feature1.mjs';

export default function Heros() {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState('Kolkata');
  const [stateName, setStateName] = useState('WB');
  const [countryName, setCountryName] = useState('India');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://flask-app-3-b7e597c9f860.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cityName, stateName, countryName }),
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setData(null);
    }
  };

  return (
    <div  id='home' className="container col-xl-10 col-xxl-8 px-4 py-5 section">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Check Weather Forecast Anywhere Anytime</h1>
          <p className="col-lg-10 fs-4">Simply put your city, state, and country to get your weather information shortly by clicking "Sign Data".</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="cityName"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="City"
              />
              <label htmlFor="cityName">Enter City</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="stateName"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
                placeholder="State"
              />
              <label htmlFor="stateName">Enter your State</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="countryName"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Country"
              />
              <label htmlFor="countryName">Enter your Country</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Data</button>
            <hr className="my-4" />
            <small className="text-body-secondary">By clicking 'Sign Data',you can see the weather.</small>
          </form>
        </div>
      </div>
      {data ? <Features1 data={data.data} cityName={cityName} stateName={stateName} countryName={countryName} /> : <p></p>}
    </div>
  );
}


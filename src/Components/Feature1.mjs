import React from 'react';

export default function Features1({ data, cityName, stateName, countryName }) {
  if (!data) {
    return <p></p>;
  }

  const backgroundImages = [
    "url('https://images.unsplash.com/photo-1494783367193-149034c05e8f')",
    "url('https://images.unsplash.com/photo-1507231062405-8b3b71e0c8a3')",
    "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
    "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e')",
    "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
    "url('https://images.unsplash.com/photo-1494783367193-149034c05e8f')"
  ];

  return (
    <div id="features" className='section'>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: backgroundImages[0] }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Main: {data.main}</h3>
              {data.icon && (
                <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="Weather Icon" />
              )}
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>City</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>{cityName}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: backgroundImages[1] }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Description: {data.description}</h3>
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Temperature: {data.temperature}°C</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>State</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>{stateName}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: backgroundImages[2] }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
             
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Max Temp: {data.max_temp}°C</h3>
               <h3 className="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">Min Temp: {data.min_temp}°C</h3>
               <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>Country</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>{countryName}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: backgroundImages[3] }}>
            <div className="d-flex flex-column h-50 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-3 mt-5 mb-4 display-6 lh-1 fw-bold">Feels Like: {data.feels_like}°C</h3>
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Humidity: {data.humidity}%</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: backgroundImages[4] }}>
            <div className="d-flex flex-column h-50 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-3 mt-5 mb-4 display-6 lh-1 fw-bolder">Pressure: {data.pressure} hPa</h3>
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bolder">Visibility: {data.visibility} meters</h3>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-10 shadow-lg" style={{ backgroundImage: backgroundImages[5] }}>
            <div className="d-flex flex-column h-50 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-3 mt-5 mb-4 display-6 lh-1 fw-bolder">Wind Speed: {data.wind_speed}m/s</h3>
              <h3 className="pt-3 mt-5 mb-4 display-6 lh-1 fw-bolder">Wind Degree: {data.wind_degree}°</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

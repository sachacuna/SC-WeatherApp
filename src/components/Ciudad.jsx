import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
    console.log('test', city)
  var sunrise = new Date(city.sunrise * 1000);
  var sunset = new Date(city.sunset * 1000);
  return (
    <div className="card_container">
      <div className="container">
        <h2 className="titulo"><b>{city.name}</b>, {city.country}</h2>
        <div className="info">
          <div><b>Temperature</b>: {Math.round(city.temp-273.15)} ºC</div>
          <div><b>Feels Like</b>: {Math.round(city.feels-273.15)} ºC</div> 
          <div><b>Weather</b>: {city.weather}</div>
          <div><b>Wind</b>: {city.wind} km/h</div>
          <div><b>Clouds</b>: {city.clouds}% </div>
          <div><b>Latitude</b>: {city.latitud}º</div>
          <div><b>Longitude</b>: {city.longitud}º</div>
          <div><b>Humidity</b>: {city.humidity}%</div>
          <div><b>Visibility</b>: {city.visibility/100}%</div>
        </div>
        <div> 
          <b>Sunrise:</b> {`${sunrise.getHours()}:${sunrise.getMinutes()} h`}{" "}
          UTC
        </div>
        <div>
          <b>Sunset:</b> {`${sunset.getHours()}:${sunset.getMinutes()} h`} UTC
        </div>
        <div>
              <img
                className="iconDetail"
                src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                width="120"
                height="120"
                alt=""
              />
              <p>{city.icon}</p>
            </div>
      </div>
    </div>
  );
}

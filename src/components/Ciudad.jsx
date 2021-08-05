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
          <h4><b>Temperature</b>: {Math.round(city.temp-273.15)} ºC</h4>
          <h4><b>Feels Like</b>: {Math.round(city.feels-273.15)} ºC</h4> 
          <h4><b>Weather</b>: {city.weather}</h4>
          <h4><b>Wind</b>: {city.wind} km/h</h4>
          <h4><b>Clouds</b>: {city.clouds}% </h4>
          <h4><b>Latitude</b>: {city.latitud}º</h4>
          <h4><b>Longitude</b>: {city.longitud}º</h4>
          <h4><b>Humidity</b>: {city.humidity}%</h4>
          <h4><b>Visibility</b>: {city.visibility/100}%</h4>
        </div>
        <div> 
          <h4><b>Sunrise</b>: {`${sunrise.getHours()}:${(sunrise.getMinutes()<10)? "0"+sunrise.getMinutes() : sunrise.getMinutes()} h`}{" "}
          UTC</h4>
        </div>
        <div>
          <h4><b>Sunset</b>: {`${sunset.getHours()}:${(sunset.getMinutes()<10)? "0"+sunset.getMinutes() : sunset.getMinutes()} h`} UTC</h4>
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

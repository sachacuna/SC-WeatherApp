import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({
  min,
  max,
  temp,
  name,
  img,
  weather,
  onClose,
  id,
}) {
  console.log("TITULO CLG WEATHER", weather)
  return (
    <div className="card">
      <div className="card-body">
        <Link to={`/ciudad/${id}`} className="card-title">
          <h5 className="card-title">
            <b>{name}</b>
          </h5>
        </Link>
        <div id="closeIcon" className="row">
          <button onClick={onClose} className="btn btn-sm btn-danger">
            <b>X</b>
          </button>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="temp">
            <b>{Math.round(temp - 273.15)}°</b>
          </div>
          <div className='box'>
          <div className="minBox">
            <p className="minMax">Min</p>
            <p className="minMax">{Math.round(min - 273.15)}°</p>
          </div>
          <div className="maxBox">
            <p className="minMax">Max</p>
            <p className="minMax">{Math.round(max - 273.15)}°</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

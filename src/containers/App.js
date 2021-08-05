import React, { useState } from "react";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About.jsx";
import Ciudad from "../components/Ciudad.jsx";
//import Footer from "../components/Footer";
import { Route } from "react-router-dom";
import swal from "sweetalert";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (cities.length < 15) {
          if (!cities.find((e) => e.id === recurso.id)) {
            if (recurso.main !== undefined) {
              const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon,
                feels: recurso.main.feels_like,
                pressure: recurso.main.pressure,
                humidity: recurso.main.humidity,
                visibility: recurso.visibility,
                country: recurso.sys.country,
                sunrise: recurso.sys.sunrise,
                sunset: recurso.sys.sunset,
              };
              setCities((oldCities) => [...oldCities, ciudad]);
            } else {
              swal("Sorry, we couldn't find this city. Try again",{
                buttons: false,
                timer: 3000,
              });
            }
          } else {
            swal("This city is already added, try another", {
              buttons: false,
              timer: 3000,
            });
          }
        } else {
          swal("Oops!","You have reached the limit of cities to show (15)","error");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route path="/About" component={About} />
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
      {/* <Route path="/" component={Footer} /> */}
    </div>
  );
}

export default App;

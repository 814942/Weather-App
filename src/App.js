import React, { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";

// Components
import Cards from "./components/cardConteiner/Cards.jsx";
import Nav from "./components/navbar/Nav";
import About from "./components/about/About";
import Ciudad from "./components/city/Ciudad";

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4d4b331e3dd4ca362f4473c780961d86`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min - 273),
            max: Math.round(recurso.main.temp_max - 273),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  };

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
      <Route path="/about" component={About} />
      <Route exact path="/">
        <Cards cities={cities} onClose={onClose} />
      </Route>
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
    </div>
  );
}

export default App;

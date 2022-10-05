import React, { useState } from 'react'; //Se agregó el { useState }
// import React from 'react'; //Se agregó el { useState }

import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
// import data from './data.js';

function App() {

  const [cities, setCities] = useState([]);

  function onSearch(city) {

    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        console.log('recurso', recurso)
        if(recurso.main !== undefined){
          const ciudad = {
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            humidity: recurso.main.humidity,
            clouds: recurso.clouds.all,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            description: recurso.weather[0].main
          };
          console.log('ciudad', ciudad)
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  console.log('citiees', cities)

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <hr/>
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;

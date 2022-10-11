import React, { useState } from 'react';
import styles from './styles/SearchBar.module.css';

/*
Este Componente recibe por props una función onSearch que recibe un parámetro (que será el nombre de la ciudad tomado desde el input pero de momento pueden pasarle uno cualquiera ya que aún no estamos utilizando estados dentro del componente). La función onSearch se debe ejecutar cuando se haga click en el botón Agregar.
*/

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("");

  return <div className={styles.container}>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(city);
                console.log('Hice clic');
                setCity("");
            }}>
              <input 
                className={styles.input} 
                type="text" 
                placeholder='Enter a city name' 
                value={city} 
                onChange={e => setCity(e.target.value)} 
              />
              <input className={styles.highlight} type="submit" value="Add"></input>
            </form>
        </div>
};
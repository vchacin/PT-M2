import React from 'react';

/*
Este Componente recibe por props una función onSearch que recibe un parámetro (que será el nombre de la ciudad tomado desde el input pero de momento pueden pasarle uno cualquiera ya que aún no estamos utilizando estados dentro del componente). La función onSearch se debe ejecutar cuando se haga click en el botón Agregar.
*/

export default function SearchBar(props) {
  // acá va tu código
  return <div>
            <div>
              <input type="text" placeholder='Ciudad...' />
            </div>
            <button onClick={() => props.onSearch('Buscando ciudad')}>Agregar</button>
        </div>
};
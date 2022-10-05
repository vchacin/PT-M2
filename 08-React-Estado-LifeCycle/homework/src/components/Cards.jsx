import React from 'react';
// Importo el componente
import error from '../error.png'
import Card from './Card';
import styles from './styles/Cards.module.css';

/*
Este Componente nos va a servir para renderizar muchos Componentes Cards. Básicamente, este componente va a recibir un arreglo de ciudades (con todos sus datos), y va a crear un componente Card por cada ciudad, pasandole las props correspondientes.

Tip: Podés usar la función map y devolver un componente Card por cada elemento del arreglo. Acá un ejemplo de la documentación de React.
*/

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map

  const style = {
    width: 400
  };
  
  if (!cities || cities.length === 0){
    return (
      <div>
        <img src={error} style={style} alt="404"/>
        <p>No hay ciudades para mostrar, por favor intenta de nuevo más tarde</p>
        <p>o ingresando el nombre en la barra de búsqueda</p>
      </div>
    )
  }

  return (
    <div className={`${styles.bg} ${styles.container}`}>
          {
            cities && cities.map (city => 
              <Card 
              name={city.name}
              temp={city.temp} 
              clouds={city.clouds}
              humidity={city.humidity}
              wind={city.wind} 
              description={city.description}
              img={city.img} 
              key={city.id}
              onClose={() => {onClose(city.id)}}
              />
            )
          }
    </div>
  )
};


/*
class Cards extends React.component{
  render(){
    if (!props.cities){
      return 'No hay ciudades para mostrar';
    }
    return (
      <div>
            {
              this.props.cities && this.props.cities.map (city => 
                <Card 
                name={city.name} 
                min={city.main.temp_min} 
                max={this.max} 
                img={city.weather[0].icon} 
                key={city.id}
                onClose={() => {alert(city.name)}}
                />
              )
            }
      </div>
    )
  }
}
export default Cards;
*/
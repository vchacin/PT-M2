import React from 'react';
// Importo el componente
import Card from './Card';
import styles from './styles/Cards.module.css';

/*
Este Componente nos va a servir para renderizar muchos Componentes Cards. Básicamente, este componente va a recibir un arreglo de ciudades (con todos sus datos), y va a crear un componente Card por cada ciudad, pasandole las props correspondientes.

Tip: Podés usar la función map y devolver un componente Card por cada elemento del arreglo. Acá un ejemplo de la documentación de React.
*/


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  console.log(props);
  
  if (!props.cities){
    return 'No hay ciudades para mostrar';
  }

  return (
    <div className={`${styles.bg} ${styles.container}`}>
          {
            props.cities && props.cities.map (city => 
              <Card 
              name={city.name}
              temp={city.main.temp} 
              clouds={city.clouds.all}
              humidity={city.main.humidity}
              pressure={city.main.pressure}
              wind={city.wind.speed} 
              description={city.weather[0].main}
              img={city.weather[0].icon} 
              key={city.id}
              onClose={() => {alert(city.name)}}
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
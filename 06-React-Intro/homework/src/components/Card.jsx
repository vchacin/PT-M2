import React from 'react';

/* 

Esta tarjeta va a mostrar el nombre de una ciudad, con su temperatura máxima y mínima, y con una imagen que representa el estado del clima (soleado, nublado, etc..), además cuando el usuario haga click en la X de cerrar, se invocará una función que tambien viene como props.
Este Componente va a recibir las siguientes props:


max: Temperatura Máxima.
min: Temperatura Mínima.
name: Nombre de la ciudad.
img: nombre de la imagen que se debe mostrar.
onClose: recibe una función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.

*/

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div>
        <div>
          <button onClick={onClose}>X</button>
        </div>
        <div>
          <h2>{name}</h2>
            <p>Min {min}</p>
            <p>Max {max}</p>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="svg" />
        </div>
    </div>
  )
};


/*
class Card extends React.component{
  render(){
    return (
      <div>
          <div>
            <button onClick={this.props.onClose}>X</button>
          </div>
          <div>
            <h2>{this.props.name}</h2>
              <p>Min {this.props.min}</p>
              <p>Max {this.props.max}</p>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="svg" />
          </div>
      </div>
    )
  }
}

export default Card;
*/
import React, { useState, useEffect } from 'react';
import styles from './styles/Card.module.css';
/* 

Esta tarjeta va a mostrar el nombre de una ciudad, con su temperatura máxima y mínima, y con una imagen que representa el estado del clima (soleado, nublado, etc..), además cuando el usuario haga click en la X de cerrar, se invocará una función que tambien viene como props.
Este Componente va a recibir las siguientes props:


max: Temperatura Máxima.
min: Temperatura Mínima.
name: Nombre de la ciudad.
img: nombre de la imagen que se debe mostrar.
onClose: recibe una función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.

*/

export default function Card({temp, clouds, humidity, wind, description, name, img, onClose}) {
  // acá va tu código

  const [time, setTime] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      let time = getCurrentTime();
      setTime(time);
    }, 1000);
  });

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let day = (today.getDate < 10 ? '0' : '') + today.getDate();
    let month = (today.getMonth < 10 ? '0' : '') + today.getMonth();
    let year = (today.getFullYear < 10 ? '0' : '') + today.getFullYear();
    let seconds = (today.getSeconds < 10 ? '0' : '') + today.getSeconds();
    return `${hours} : ${minutes} : ${seconds} - ${day} / ${month} / ${year}`;
  }

  const setCelsius = fahrenheit => {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius.toFixed(0);
  }

  return (

    <div className={styles.card}>

      <button className={styles.btn} onClick={onClose}>X</button>

      <div className={styles.cardContainer}>

        <div className={styles.cardItem}>
              <img 
                className={styles.img} 
                src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
                alt="svg" />
              <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.layoutCard}>
          <p className={styles.temp}>
            {setCelsius(temp)}°
          </p>
        </div>

        <div>
          <div className={styles.layoutCard}>
            <div>
              <div className={styles.layoutCard}>
                <div className={styles.cardItem}>
                  <h2 className={styles.nameTitle}>{name}</h2>
                  <p className={styles.description}>{time}</p>
                </div>
              </div>
              <div className={styles.layoutCard}>
                <div className={styles.cardItem}>
                  <p className={styles.variables}>Clouds</p>
                  <p>{clouds}</p>
                </div>
                <div className={styles.cardItem}>
                  <p className={styles.variables}>Humidity</p>
                  <p>{humidity}</p>
                </div>
                <div className={styles.cardItem}>
                  <p className={styles.variables}>Wind</p> 
                  <p>{wind}</p>
                </div>
              </div>
            </div>  
          </div>
        </div>

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
//animal.js exporta un objeto con los animales y sus hechos.
import { animals } from './animals';

import React from 'react';
import ReactDOM from 'react-dom';

//cargo el title con un operador ternario
let title ="";
title = title === '' ? 'Click an animal for a fun act' : title;

//imagen de fondo
const background = (<img class="background" alt="ocean" src="./images/ocean.jpg"/>);

//genera array de images con atributos para el objeto a renderizar
//al hacer click en una imagen se llama a la funcion displayFact
const images = [];
for (const animal in animals){
  images.push(<img 
    key= {animal} 
    className= 'animal'
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button'
    onClick={displayFact} />)
}

//busca y genera un fact random del animal recibido mediante el evento.
function displayFact(e){
  let selectedAnimal = e.target.alt;
  const selectedArray = animals[selectedAnimal].facts
  const factIndex = Math.floor(Math.random() * selectedArray.length);
  let selectedFact= selectedArray[factIndex];
  //carga el fact mediante el id del elemento
  document.getElementById('fact').innerHTML=selectedFact;
}


//el objeto que se va a renderizar.
// title se cargó manualmente (con un condicional)
// background se cargó manualmente
// el array images se cargó con un for .. in
// el fact se seleccionó y cargó en displayFact de acuerdo al elemento clickeado.
const animalFacts = (
  <div>
    <h1>{title}</h1>
    <div>{background}</div>
    <div className="animals">{images}</div>
    <p id='fact'></p>
  </div>
);

//una vez que se tiene el objeto cargado, se puede renderizar.
ReactDOM.render(animalFacts,document.getElementById("root"));
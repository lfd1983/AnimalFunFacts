import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

function displayFact(e){
  let a= e.target.alt;
  let factt= animals.facts[1];
  document.getElementById('fact').innerHTML=factt;
}

const background = (<img class="background" alt="ocean" src="./images/ocean.jpg"/>);
let images = [];
for (const animal in animals){
  images.push(<img 
    key= {animal}
    className= 'animal'
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button'
    onclick="displayFact()" />)
}
let title = '';
title = title === '' ? 'Click an animal for a fun act' : title;
const animalFacts = (
  <div>
    <h1>{title}</h1>
    {background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);
ReactDOM.render(animalFacts,document.getElementById("root"));
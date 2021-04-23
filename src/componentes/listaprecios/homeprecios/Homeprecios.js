import React from 'react';
import data from '../data';
import Tarjetadeprecios from '../tarjetadeprecios/Tarjetadeprecios';



function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};


function Homeprecios() {
  return (
    <div className="wrapper">
      <h1>Precios de suscripciones Mensuales</h1>
      {data.map(animal => (
        <Tarjetadeprecios additional={animal.additional}
          diet={animal.diet} key={animal.name} name={animal.name} scientificName={animal.scientificName} showAdditional={showAdditional}
          size={animal.size}/>
      ))}
    </div>
  )
}

export default Homeprecios;
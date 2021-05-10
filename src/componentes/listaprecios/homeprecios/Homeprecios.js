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
    <div className="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4" class="text">Bicicletas</h1>
          <p class="lead" class="text">Convierte tu pasión en una aventura, ¡ha llegado el momento de tener una bicicleta más aerodinámica, más potente, más divertida! Atrévete a rodar con una bici de montaña que te hará sentir competidor!.</p>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/2568/3124/products/bicicleta-tucana-negro---gris_5_376da0d4-9494-4881-be4d-1d36e09a359e_720x.png?v=1620480933" alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Bicicleta de montaña - 9 velocidades</h5>
            <p class="card-text">ALUMINIO CARBON LOOKING TYPE POST MOUNT CABLEADO INTERNO.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/2568/3124/products/tucana-negro-naranja-12vel-4_720x.png?v=1619701608" alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Bicicleta de montaña - 12 Velocidades</h5>
            <p class="card-text">ALUMINIO CARBON LOOKING TYPE POST MOUNT CABLEADO INTERNO.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/2568/3124/products/Koruna-Fucsia---Turquesa_720x.png?v=1618678705" alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Bicicleta de montaña</h5>
            <p class="card-text">ALUMINIO KORUNA CABLEADO INTERNO CON POST MOUNT INTERNO.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homeprecios;
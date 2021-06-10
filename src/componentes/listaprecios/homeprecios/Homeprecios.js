import React from 'react';
import data from '../data';
import Tarjetadeprecios from '../tarjetadeprecios/Tarjetadeprecios';
import './Homeprecios.css';

function Homeprecios() {
  return (
    <div className="container">
      <hr className="featurette-divider" />
      <div className="container" class="fontBicicletas">
        <h2 class="centerText">Bicicletas</h2>
        <p class="centerText">Convierte tu pasión en una aventura, ¡ha llegado el momento de tener una bicicleta más aerodinámica, más potente, más divertida! Atrévete a rodar con la optimus, una bici de montaña que te hará sentir competidor!</p>
      </div>
      <hr className="featurette-divider" />

      <div className="row" class="padre">

        <div className="col-lm-4" class="hijo">
          <img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/bici1.jpg'} alt="alternatetext"></img>
          <h5 class="fontContenido"><b>Bicicleta de Montaña - 8 Velocidades</b></h5>
          <p class="fontContenido">$1.516.600</p>
        </div>

        <div className="col-lm-4" class="hijo">
          <img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/bici2.jpg'} alt="alternatetext"></img>
          <h5 class="fontContenido"><b>Bicicleta de montaña - 9 velocidades</b></h5>
          <p class="fontContenido">$2.291.000</p>
        </div>

        <div className="col-lm-4" class="hijo">
          <img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/bici3.jpg'} alt="alternatetext"></img>
          <h5 class="fontContenido"><b>Bicicleta de montaña - 12 Velocidades</b></h5>
          <p class="fontContenido">$3.117.000</p>
        </div>

        <div className="col-lm-4" class="hijo">
          <img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/bici4.jpg'} alt="alternatetext"></img>
          <h5 class="fontContenido"><b>Bicicleta de Ruta - 9 Velocidades</b></h5>
          <p class="fontContenido">$2.235.000</p>
        </div>
 
      </div>
      <hr className="featurette-divider" />
    </div>
  )
}

export default Homeprecios;
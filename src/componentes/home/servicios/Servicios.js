import React from 'react';
//import './Slider.css';
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container servicios">
 
            <div className="row">
 
                <div className="col-lg-4">
                    <img class="rounded mx-auto d-block" width="140" height="140" src="https://www.svgrepo.com/show/21593/bicycle.svg" alt="alternatetext"></img>
                    <h2>Bicicletas de Montaña</h2>
                    <p>Convierte tu pasión en una aventura, ¡ha llegado el momento de tener una bicicleta más aerodinámica, más potente, más divertida!</p>
                    <p><a className="btn btn-primary" href="#" role="button">LO QUIERO</a></p>
                </div>
 
                <div className="col-lg-4">
                <img class="rounded mx-auto d-block" width="140" height="140" src="https://www.svgrepo.com/show/277528/helmet.svg" alt="alternatetext"></img>
                    <h2>Cascos</h2>
                    <p>Atrévete a descubrir un nuevo concepto, una nueva aventura. Conoce nuestra amplia gama en Cascos de Ciclismo.</p>
                    <p><a className="btn btn-primary" href="#" role="button">LO QUIERO</a></p>
                </div>
 
                <div className="col-lg-4">
                <img class="rounded mx-auto d-block" width="140" height="140" src="https://www.svgrepo.com/show/258179/glasses.svg" alt="alternatetext"></img>
                    <h2>Gafas</h2>
                    <p>Atrévete a descubrir un nuevo concepto, una nueva aventura. Conoce nuestra amplia gama en Gafas de Ciclismo.</p>
                    <p><a className="btn btn-primary" href="#" role="button">LO QUIERO</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;
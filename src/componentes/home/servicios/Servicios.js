import React from 'react';
import './Servicios.css';

class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container servicios" class="fontServices">
 
            <div className="row">
                
                <div className="col-lg-4">
                    <img class="rounded mx-auto d-block" width="350" height="200" src={process.env.PUBLIC_URL + 'images/bici.jpg'} alt="alternatetext"></img>
                    <p>¡Ha llegado el momento de tener una bicicleta más aerodinámica, más potente, más divertida!</p>
                    <p class="btnCenter"><a className="btn btn-secondary" href="#" role="button">¡LO QUIERO!</a></p>
                </div>
 
                <div className="col-lg-4">
                <img class="rounded mx-auto d-block" width="350" height="200" src={process.env.PUBLIC_URL + 'images/cascos.jpg'} alt="alternatetext"></img>
                    <p>Conoce nuestra amplia gama en Cascos de Ciclismo, con la protección mas segura del mercado!</p>
                    <p class="btnCenter"><a className="btn btn-secondary" href="#" role="button">¡LO QUIERO!</a></p>
                </div>
 
                <div className="col-lg-4">
                <img class="rounded mx-auto d-block" width="350" height="200" src={process.env.PUBLIC_URL + 'images/gafas.jpg'} alt="alternatetext"></img>
                    <p>Conoce nuestra amplia gama en Gafas de Ciclismo, con una gran variedad de estilos!</p>
                    <p class="btnCenter"><a className="btn btn-secondary" href="#" role="button">¡LO QUIERO!</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;
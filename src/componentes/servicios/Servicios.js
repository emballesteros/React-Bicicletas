import React from 'react';
 
import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';
 
 
class Servicios extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading">Servicios </h1>
				      <p className="lead text-muted">
					  Cuando adquieres una de nuestras bicicletas, no solo adquieres una nueva compañera de aventura, esta también viene acompañada de una serie de beneficios que te ofrecemos por haber decidido ser parte de nuestra comunidad como lo son :
				      </p>				      
				    </div>
				</section>
 
		        <div className="album py-5 bg-light">
				    <div className="container">
 
				      <div className="row">
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
						  <img src="https://cdn.shopify.com/s/files/1/2568/3124/files/LIFETIME-OPTIMUS-1.jpg?v=1612301731" alt="alternatetext"></img>
							<div className="card-body">
				              <p className="card-text">Garantía extendida</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
						  <img src="https://cdn.shopify.com/s/files/1/2568/3124/files/NEW-FRAME-OPTIMUS.jpg?v=1612302030" alt="alternatetext"></img>
				            <div className="card-body">
				              <p className="card-text">Nuevo marco</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
						  <img src="https://cdn.shopify.com/s/files/1/2568/3124/files/BIKE-PACT-OPTIMUS.jpg?v=1612302116" alt="alternatetext"></img>
				            <div className="card-body">
				              <p className="card-text">Pacto de Reposición</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
 
				      </div>
				    </div>
				</div>
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Servicios;
import React from 'react';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import './Servicios.css';


class Servicios extends React.Component {

	render() {

		return (

			<>

				<Menu />
				<div class="container" >
					<hr className="featurette-divider" />
					<main role="main" className="flex-shrink-0 mt-5">

						<div class="centerText">
							<h1 className="fontTitulo" >BENEFICIOS</h1>
							<p className="fontTitulo"> Cuando adquieres una de nuestras bicicletas, no solo adquieres una nueva compañera de aventura, esta también viene acompañada de una serie de beneficios que te ofrecemos por haber decidido ser parte de nuestra comunidad como lo son :</p>
						</div>

						<hr className="featurette-divider" />

						<div className="row">
							<div className="col-md-4">
								<div className="card mb-4 shadow-sm">
									<img src="https://cdn.shopify.com/s/files/1/2568/3124/files/LIFETIME-OPTIMUS-1.jpg?v=1612301731" alt="alternatetext"></img>
									<div className="card-body">
										<div class="centerText">
											<h5 className="card-text" class="fontTexto" ><b>GARANTÍA EXTENDIDA</b></h5>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<p class="fontTexto">Garantizamos inicialmente 2 años por defectos de material y fabricación en todos los marcos de nuestra marca que montamos en nuestras bicicletas; adicional a esto, otorgamos el beneficio Lifetime de 3 años adicionales.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card mb-4 shadow-sm">
									<img src="https://cdn.shopify.com/s/files/1/2568/3124/files/NEW-FRAME-OPTIMUS.jpg?v=1612302030" alt="alternatetext"></img>
									<div className="card-body">
										<div class="centerText">
											<h5 className="card-text" class="fontTexto"><b>NUEVO MARCO</b></h5>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<p class="fontTexto">El beneficio de New Frame debe entenderse como el derecho que se le otorga únicamente al comprador inicial u original para reponer el marco de su bicicleta en caso de accidente , donde se determine pérdida total del marco.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card mb-4 shadow-sm">
									<img src="https://cdn.shopify.com/s/files/1/2568/3124/files/BIKE-PACT-OPTIMUS.jpg?v=1612302116" alt="alternatetext"></img>
									<div className="card-body">
										<div class="centerText">
											<h5 className="card-text" class="fontTexto"><b>PACTO DE REPOSICIÓN</b></h5>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<p class="fontTexto">Solicitud de reposición de la bicicleta hurtada (color, talla, modelo, rin, referencia, número interno), en carta formal del comprador inicial u original del producto, indicando la manifestación expresa de que asumirá el pago del seguro.</p>
										</div>
									</div>
								</div>
							</div>

						</div>

					</main>
					<hr className="featurette-divider" />
				</div>
				<Footer />
			</>

		)

	}

}

export default Servicios;
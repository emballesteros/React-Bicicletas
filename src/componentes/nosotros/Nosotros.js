import React from 'react';

import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './detalles/Detalles'; // Este Componente lo crearé a continuación 
import Contenedornosotros from './contenedornosotros/Contenedornosotros';
import Divnosotros from './divnosotros/Divnosotros';
import Footer from '../footer/Footer';


class Nosotros extends React.Component {

	render() {

		return (

			<>

				<Menu />
				<div class="container" >
					<hr className="featurette-divider" />
					<main role="main" className="flex-shrink-0 mt-5">

						<div class="centerText">
							<h1 className="fontTitulo" >EQUIPAMIENTO</h1>
						</div>

						<hr className="featurette-divider" />
						<div className="container">

							<div className="row" class="padre">

								<div className="col-lm-4" class="hijo">
									<img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/casco1.png'} alt="alternatetext"></img>
									<h5 class="fontContenido"><b>Casco In Mold Fenix</b></h5>
									<p class="fontContenido">$85.000 </p>
								</div>

								<div className="col-lm-4" class="hijo">
									<img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/casco2.jpg'} alt="alternatetext"></img>
									<h5 class="fontContenido"><b>Casco In Mold Perseo</b></h5>
									<p class="fontContenido">$130.000</p>
								</div>

								<div className="col-lm-4" class="hijo">
									<img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/casco3.jpg'} alt="alternatetext"></img>
									<h5 class="fontContenido"><b>Casco In mold Octans</b></h5>
									<p class="fontContenido">$115.000</p>
								</div>

								<div className="col-lm-4" class="hijo">
									<img class="img-fluid" width="450" height="200" src={process.env.PUBLIC_URL + 'images/casco4.png'} alt="alternatetext"></img>
									<h5 class="fontContenido"><b>Casco In-mold Black</b></h5>
									<p class="fontContenido">$100.000 </p>
								</div>

							</div>
							<hr className="featurette-divider" />
						</div>

					</main>
				</div>
				<Footer />
			</>

		)

	}

}

export default Nosotros
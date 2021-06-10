import React from 'react';

import Menu from '../menu/Menu';
import Formulario from './formulario/Formulario';
import Mapa from './mapa/Mapa';
import Footer from '../footer/Footer';

class Contacto extends React.Component {

	render() {

		return (

			<>

				<Menu />

				<main role="main" className="flex-shrink-0 mt-5">
					<hr className="featurette-divider" />
					<div className="container">

						<div className="row">

							<div className="col-md-6">

								<Formulario />

							</div>

							<div className="col-md-6">

								<Mapa />

							</div>

						</div>
						<hr className="featurette-divider" />
					</div>

				</main>
				<Footer />

			</>

		)

	}

}

export default Contacto;
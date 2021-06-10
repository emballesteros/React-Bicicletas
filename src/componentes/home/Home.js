import React from 'react';

import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer';
import Jumbotronhome from './jumbotronhome/Jumbotronhome';
import Contenedorhome from './contenedorhome/Contenedorhome';


class Home extends React.Component {

	render() {

		return (

			<>

				<Menu />

				<Slider />
				<div className="container"><hr className="featurette-divider" /></div>
				<div className="container"><Servicios /></div>
				<div className="container"><hr className="featurette-divider" /></div>
				<div className="container"><Jumbotronhome /></div>
				<div className="container"><hr className="featurette-divider" /></div>
				<Footer />

			</>

		)

	}

}

export default Home;
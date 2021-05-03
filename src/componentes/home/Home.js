import React from 'react';

import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer';
import Jumbotronhome from './jumbotronhome/Jumbotronhome';
import Contenedorhome from './contenedorhome/Contenedorhome';


class Home extends React.Component {

	render() {

		return(

			<>

			<Menu />

		  	  		<Slider />
					<hr className="featurette-divider" />
		  	  		<Servicios />
				     <hr className="featurette-divider" />
				    <Jumbotronhome />
					<hr className="featurette-divider" />


	  		<Footer />

	  		</>

		)

	}

}

export default Home;
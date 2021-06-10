import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.css';
//import './Menu.css';

class Menu extends React.Component {

	render() {

		return (

			<nav className="navbar navbar-expand-md navbar-dark fixed-top navbar navbar-dark bg-dark">

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">

					<ul className="navbar-nav mr-auto">

						<li className="nav-item" class="fontMenuTitle">
							<NavLink to="/" className="nav-link" > PROYECTO BICICLETAS | PYGMALION TECH</NavLink>
						</li>

					</ul>


					<ul className="navbar-nav ml-auto">

						<li className="nav-item" class="fontMenu">
							<NavLink to="/" className="nav-link" >INICIO</NavLink>
						</li>
						<li className="nav-item" class="fontMenu">
							<NavLink to="/listaprecios" className="nav-link active">BICICLETAS </NavLink>
						</li>
						<li className="nav-item" class="fontMenu">
							<NavLink to="/nosotros" className="nav-link active">EQUIPAMIENTO </NavLink>
						</li>
						<li className="nav-item" class="fontMenu">
							<NavLink to="/servicios" className="nav-link active">BENEFICIOS </NavLink>
						</li>
						<li className="nav-item" class="fontMenu">
							<NavLink to="/contacto" className="nav-link active">CONTACTO </NavLink>
						</li>

					</ul>
					<form class="form-inline my-2 my-lg-0">
						<input class="form-control mr-sm-2" type="search" placeholder="Buscar.." aria-label="Search"></input>
						<button class="btn btn-light my-2 my-sm-0" type="submit">Buscar</button>
					</form>
				</div>

			</nav>

		)

	}

}

export default Menu;
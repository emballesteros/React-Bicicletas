import React from 'react';
//import './Slider.css';
 
class Slider extends React.Component {
 
  render() {
 
  	return (
 
  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/foto1.jpg'} width="1150" height="60" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://www.todorock.com/lanzamientos/the-offspring-publica-let-the-bad-times-roll-tras-10-anos-de-silencio/" target="_blank" role="button">Leer más</a>
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src= {process.env.PUBLIC_URL + 'images/foto2.jpg'} width="1150" height="60" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://www.todorock.com/lanzamientos/the-offspring-publica-let-the-bad-times-roll-tras-10-anos-de-silencio/" target="_blank" role="button">Leer más</a>
		            </div>
		        </div>
		       
		    </div>
		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>
 
  	)
    
  }
 
}
 
export default Slider;
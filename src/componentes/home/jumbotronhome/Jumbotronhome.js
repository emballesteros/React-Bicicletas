import React from 'react';
import './Jumbotronhome.css';

class Jumbotronhome extends React.Component {

  render() {

    return (

      <div class="container" className="centerText">

        <h3 class="fontJumbotron">ELIJE COMÓ VAS A RODAR</h3>

        <hr className="featurette-divider" />

        <div className="row">

          <div className="col-sm-4">
            <img class="img-fluid" width="350" height="200" src={process.env.PUBLIC_URL + 'images/bici1.jpg'} alt="alternatetext"></img>
          </div>

          <div className="col-sm-4">
            <img class="img-fluid" width="350" height="200" src={process.env.PUBLIC_URL + 'images/bici2.jpg'} alt="alternatetext"></img>
          </div>

          <div className="col-sm-4">
            <img class="img-fluid" width="350" height="200" src={process.env.PUBLIC_URL + 'images/bici3.jpg'} alt="alternatetext"></img>
          </div>

        </div>

      </div>

    )

  }

}

export default Jumbotronhome;
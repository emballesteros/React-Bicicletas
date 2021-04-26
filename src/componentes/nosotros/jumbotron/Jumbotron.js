import React from 'react';

class Jumbotron extends React.Component {

  render() {

    return (

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Nosotros </h1>
          <p>
            Cada meta conlleva esfuerzos inigualables que invocan lo mejor de nuestro ser, compartimos el espíritu aventurero, la sensación de fuerza, potencia y la necesidad de superarse así mismo día a día. Por tal razón creamos las mejores herramientas para que explores la pasión que vive en ti, bicicletas MTB y BMX junto con elementos deportivos que acompañen tus rutas y aventuras de la forma más segura y divertida.
                </p>
          <p><a className="btn btn-primary btn-lg" href="https://www.google.com.co" target="_blank" role="button">Visitar Web</a></p>
        </div>
      </div>

    )

  }

}

export default Jumbotron;
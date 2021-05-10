import React from 'react';



class Jumbotronhome extends React.Component {

  render() {

    return (

      <div class="container jumbotron">
        <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4">¿QUÉ DEBES TENER EN CUENTA A MOMENTO DE COMPRAR TU BICI?</h1>
          <p class="lead">
          Elegir entre tantas bicicletas resulta complejo por la variedad de modelos, estilos, 
          componentes que trae cada una, precios del mercado y, por supuesto, la cantidad de tiendas online o físicas...
          </p>
          <hr class="my-4"></hr>
          <p class="lead">
            <a class="btn btn-success" href="#" role="button">Leer más</a>
          </p>
        </div>
      </div>

    )

  }

}

export default Jumbotronhome;
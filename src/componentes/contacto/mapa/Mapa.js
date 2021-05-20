import React from 'react';

class Mapa extends React.Component {

  render() {

    return (

      <div class="mapouter">
        <br class="gmap_canvas"></br>
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Bucaramanga&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>

    )

  }

}

export default Mapa;
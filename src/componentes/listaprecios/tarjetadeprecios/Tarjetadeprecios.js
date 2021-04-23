import React from 'react';
import PropTypes from 'prop-types';
import './Tarjetadeprecios.css'

export default function Tarjetadeprecios({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size
}) {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}kg</h4>
      <div>{diet.join(', ')}.</div>
      <button onClick={() => showAdditional(additional)}>Mas informacion</button>
    </div>
  );
}


Tarjetadeprecios.propTypes = {
    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  }

  Tarjetadeprecios.defaultProps = {
    additional: {
      notes: 'No se tiene información del producto'
    }
  }
  
import React from 'react';
import './descripcion_dron.css';


function Descripcion({ drone }) {

  const en_la_caja1 = drone.en_la_caja.map(d => {
    return <p>{d}</p>;
  });

  return (
      <div className='contenido'>

        <h3>{drone.name}</h3>
        <img src={drone.img} className='imagen'></img>
        <h4>{drone.descripcion}</h4>
        <h4>En la caja:</h4>
        {en_la_caja1}
        <h4>{drone.precio} €</h4>

      </div>
  )
};

export default Descripcion;
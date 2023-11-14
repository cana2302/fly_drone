import React from 'react';
import Head_flyDrone from '../components/Head_flyDrone.jsx';
import './descripcion_dron.css';


function Descripción({ drone }) {

  const en_la_caja1 = drone.en_la_caja.map(d => {
    return <p>{d}</p>;
  });

  return (
    <div className='cuerpo_body'>

    <Head_flyDrone />
    
    <div className='contenido'>
      <h3>{drone.name}</h3>
      <img src={drone.img} className='imagen'></img>
      <h4>{drone.descripcion}</h4>
      <h4>En la caja:</h4>
      {en_la_caja1}
      <h4>{drone.precio} €</h4>
    </div>

  </div>

  )
};

export default Descripción;
import React from 'react';
import './css/card_dron.css';
import { Link } from 'react-router-dom';


function Card_dron({ drone }) {

  return (
    <Link to={drone.id} className='contenedor_card'>
      <div>
        <h4>{drone.name}</h4>
        <p>{drone.slogan}</p>
        <img src={drone.img} className='imagen'></img>
        <p>{drone.precio} €</p>
        <Link to={drone.id} className='link'>
          <p>Descubre más &gt;</p>
        </Link>
      </div>
    </Link>
  )
};

export default Card_dron;
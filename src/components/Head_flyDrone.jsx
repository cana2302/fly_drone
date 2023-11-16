import React from 'react';
import './css/head_flyDrone.css';
import { Link } from 'react-router-dom';
import imagenPortada from '../assets/img_2.png';

function Head_flyDrone() {

  return (
    <>
    <div className='portada'>
      <img src={imagenPortada} alt="imagen_portada" />
    </div>

    <div className='head'>

      <div className='fly_drone'>
        Fly Drone
      </div>

      <div className='contenedor_menu'>

        <ul className='ul_menu'>          
          <Link to="/" className='link'>
            <li className='li_menu'>Inicio</li>
          </Link>
          <Link to="/productos" className='link'>
            <li className='li_menu'>Productos</li>
          </Link>  
          <Link to="/contactanos" className='link'>
            <li className='li_menu'>Contactanos</li>
          </Link>  
          <Link to="/acerca_de" className='link'>
            <li className='li_menu'>Acerca de</li>
          </Link>      
        </ul>

      </div>

    </div>

    </>
  )
}

export default Head_flyDrone;
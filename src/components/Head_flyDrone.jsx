import React from 'react';
import './css/head_flyDrone.css';
import { Link } from 'react-router-dom';

function Head_flyDrone() {

  return (
    
    <div className='head'>

      <div className='fly_drone'>
        Fly Drone
      </div>

      <div className='elemento_head'>
        <ul className='elemento_head'>
          
          <Link to="/" className='link'>
            <li>Inicio</li>
          </Link>
          <li>Productos</li>
          <li>Contactanos</li>
          <li>Acerca de</li>
            
        </ul>
      </div>

    </div>
    
  )
}

export default Head_flyDrone;
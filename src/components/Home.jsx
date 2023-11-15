import React from 'react';
import './css/home.css';
import articulosDisponibles from './data/articulosDisponibles';
import Card_dron from './Card_dron';


function Home() {

  const tarjetasDisponibles = articulosDisponibles.map(d => {
    return <Card_dron drone={d} />;
  });

  return (

    <div className='contenedor_tarjetas'>
      {tarjetasDisponibles}
    </div>    
    
  );
}

export default Home;
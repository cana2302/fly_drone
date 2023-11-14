import './App.css'
import Card_dron from './components/Card_dron';
import Head_flyDrone from './components/Head_flyDrone.jsx';
import droneList from './components/data/droneList.js';

function App() {
    
  const articulosDisponibles = droneList.map(d => {
    return <Card_dron drone={d} />;
  });
  
  return (
    <div className='cuerpo_body'>

      <Head_flyDrone />
      
      <div className='contenedor_tarjetas'>
        {articulosDisponibles}
      </div>

    </div>
  )
}

export default App

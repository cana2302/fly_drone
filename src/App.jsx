import './App.css'
import { Routes, Route } from 'react-router-dom';
import Head_flyDrone from './components/Head_flyDrone.jsx';
import Home from './components/Home.jsx';
import articulosDisponibles from './components/data/articulosDisponibles.jsx';
import Descripcion from './views/Descripcion_dron.jsx';

function App() {

  ///////////////////////////////////////////

  const routes = [
    { 
      ruta: <Route path= "/" element= {<Home />} />
    }
  ];

  console.log(routes);

  articulosDisponibles.forEach((articulosDisponibles) => {
    routes.push(
      {
        ruta: <Route path={articulosDisponibles.id} element={<Descripcion drone={articulosDisponibles} />} />
      }
    );
  });

  console.log(routes);
  
  ///////////////////////////////////////////
  return (
    <div className='cuerpo_body'>

      <Head_flyDrone />

      <Routes>
        
        <Route path= "/" element= {<Home />} />
        
        {routes.map((ruta, index) => (
           <Route key={index} path={ruta.ruta.props.path} element={ruta.ruta.props.element} />
        ))}

      </Routes>

    </div>
  );
}

export default App

import './App.css'
import { Routes, Route } from 'react-router-dom';
import Head_flyDrone from './components/Head_flyDrone.jsx';
import Home from './components/Home.jsx';
import articulosDisponibles from './components/data/articulosDisponibles.jsx';
import Descripcion from './views/Descripcion_dron.jsx';
import Footer from './components/Footer.jsx';

function App() {

  //Lista con 1 objeto (contiene path y elemento a renderizar)
  const routes = [
    { 
      ruta: <Route path= "/" element= {<Home />} />
    }
  ];

  //Se agrega a la lista 1 objeto por cada ID disponible (con su path y elemento correspondiente)
  articulosDisponibles.forEach((articulosDisponibles) => {
    routes.push(
      {
        ruta: <Route path={articulosDisponibles.id} element={<Descripcion drone={articulosDisponibles} />} />
      }
    );
  });
  
  return (
    <div className='cuerpo_body'>

      <Head_flyDrone />

      <Routes>
        
        <Route path= "/" element= {<Home />} />

        {routes.map((ruta, index) => (
           <Route key={index} path={ruta.ruta.props.path} element={ruta.ruta.props.element} />
        ))}

      </Routes>

      <Footer />

    </div>
  );
}

export default App;

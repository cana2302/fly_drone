import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import droneList from './components/data/droneList.js';
import Descripción from './views/Descripcion_dron.jsx';
import { v4 as uuidv4 } from 'uuid';

//Asigna un ID unico a cada elemento de la lista
droneList.forEach( (droneList) => {
  droneList.id = uuidv4();
});

const routes = [
  {
    path: "/",
    element: <App />
  }
];

droneList.forEach((droneList) => {
  routes.push(
    {
    path:droneList.id,
    element:<Descripción drone={droneList} />
    }
  );
});

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

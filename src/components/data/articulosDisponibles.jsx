import droneList from './droneList';
import { v4 as uuidv4 } from 'uuid';


//Funcion para asignar un ID único a cada elemento
const asignarID = (stock) => {

  stock.forEach( (articulo) => {
    articulo.id = uuidv4();
  });

  return stock;
};


const articulosDisponibles = asignarID(droneList);

export default articulosDisponibles;

import './App.css';
import durazno from './imagenes/durazno.jpg'
/*import Tarea from "./componentes/Tarea"; */

import ListaDeTareas from './componentes/listaDeTareas';

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={durazno} className='logo' alt='logo'/>      
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <ListaDeTareas/>
        {/* <Tarea texto={"Aprender React"}/> */}
      </div>
    </div>
  );
}

export default App;

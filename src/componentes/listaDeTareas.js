import React, {useState} from "react";
import TareaFormulario from "./tareaFormulario";
import "../stylesheet/listaDeTareas.css";
import Tarea from "./Tarea";

function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {

        // console.log("tarea agregada");
        console.log(tarea);
        if (tarea.texto.trim()){
            tarea.texto=tarea.texto.trim();
            const tareaActualizaciadas = [tarea, ...tareas];
            setTareas(tareaActualizaciadas);
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizaciadas = tareas.filter(tarea => tarea.id  !==id);
        setTareas(tareasActualizaciadas);
    }

    const completarTarea = id =>{
        const tareasActualizaciadas = tareas.map(
            tarea =>{
                if(tarea.id === id){
                    tarea.completada = !tarea.completada;
                }
                return tarea;
            }
        )
        setTareas(tareasActualizaciadas);
    }

    return(
        <> 
            <TareaFormulario  onSubmit={agregarTarea}/>
            <div className="tarea-lista-contenedor">
                {
                    tareas.map((tarea) => 
                    <Tarea 
                        key={tarea.id}
                        id = {tarea.id}
                        texto={tarea.texto}
                        completada = {tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea = {completarTarea}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;
import React, { useState } from 'react'

export const Anadir = ({setTareas,tareas}) => {
  const [p, setP] = useState();
  const agregarTarea = ()=>{
    //obtener valor del input
    let nombreTarea = document.getElementById('tarea').value;
    
    if(nombreTarea.trim() !== "") {
    //crear el objeto nuevo
    const tarea = {
      id: tareas.length+1,
      checked:false,
      nombre:nombreTarea,
      fechaCreacion:new Date(),
      fechaRealizacion:"N/A"
    }

    //agrego al array de tareas   
    
      let aux = [...tareas,tarea];    
    setTareas(aux);

  }
  else{
    setP("Por favor, ingrese una tarea válida");
  }
    //borrar el contenido del formulario
    document.getElementById('tarea').value = "";
  }

  return (
    <>
        <h1>To-do</h1>
        <input className="agregar" type="text" id="tarea" />
        <input onClick={()=>agregarTarea()} className="enviar" type="button" value="Enviar" />
        <p>{p}</p>
    </>
  )
}

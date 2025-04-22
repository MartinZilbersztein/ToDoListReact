import React from 'react'

export const Anadir = ({setTareas,tareas}) => {

  const agregarTarea = ()=>{
    //obtener valor del input
    let nombreTarea = document.getElementById('tarea').value;
    
    //crear el objeto nuevo
    const tarea = {
      id: tareas.length+1,
      check:false,
      nombre:nombreTarea,
      fechaCreacion:new Date().toLocaleString(),
      fechaRealizacion:"N/A"
    }

    //agrego al array de tareas    
    let aux = [...tareas,tarea];    
    setTareas(aux);
  }

  return (
    <>
        <h1>To-do</h1>
        <input className="agregar" type="text" id="tarea" />
        <input onClick={()=>agregarTarea()} className="enviar" type="button" value="Enviar" />
    </>
  )
}

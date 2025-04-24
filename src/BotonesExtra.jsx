import React from 'react'

export const BotonesExtra = ({lista, setTareas}) => {
  const borrarTodo = () =>{
    let aux = [...lista];
    aux = [];
    setTareas(aux);
  }
  return (
    <>
        <input onClick={()=>borrarTodo()} className="enviar" type="button" value="Borrar todo" />
        <input className="enviar" type="button" value="Calcular tarea" />
    </>
  )
}

import React from 'react'

export const BotonesExtra = ({lista, setTareas}) => {
  const borrarTodo = () =>{
    let aux = [...lista];
    aux = [];
    setTareas(aux);
  }
  let masRapida = Number.MAX_VALUE;
  let idMasRapida = '';
  const calcularTarea = () =>{

    lista.map(item => {
      if((item.fechaRealizacion - item.fechaCreacion)<masRapida)
      {
        masRapida=item.fechaRealizacion - item.fechaCreacion;
        idMasRapida=item.id;
      }})
      console.log(idMasRapida);
      return idMasRapida;
  }

  return (
    <>
        <input onClick={()=>borrarTodo()} className="enviar" type="button" value="Borrar todo" />
        <input onClick={() => calcularTarea()} className="enviar" type="button" value="Calcular tarea" />
        <p>{idMasRapida}</p>
    </>
  )
}

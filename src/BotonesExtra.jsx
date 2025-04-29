import React from 'react'
import { useState } from 'react'

export const BotonesExtra = ({lista, setTareas}) => {
  let tareaRapida = {
    tarea: null,
    calculo: Infinity
  }
  const [parrafo,setParrafo] = useState();
  const borrarTodo = () =>{
    let aux = [...lista];
    aux = [];
    setTareas(aux);
    setParrafo("");
  }

  
const calcularTarea = () =>{
  let encontrado = false, id = 0, date1, date2;
  while (!encontrado && id < lista.length-1){
    if (lista[id].fechaRealizacion != "N/A")
    {
      encontrado = true;
      date1 = new Date(lista[id].fechaRealizacion);
      date2 = new Date(lista[id].fechaCreacion);
      tareaRapida.calculo = date1.getTime() - date2.getTime();
      tareaRapida.tarea = lista[id].nombre;
    } else id++;
  }
    lista.map(item =>{
    if (item.fechaRealizacion != "N/A")
    {
      if (item.fechaRealizacion.getTime()-item.fechaCreacion.getTime() < tareaRapida.calculo)
      {
        tareaRapida.tarea = item.nombre;
        console.log(tareaRapida.tarea);
        tareaRapida.calculo = item.fechaRealizacion.getTime()-item.fechaCreacion.getTime();
      }
    }
  })
  setParrafo("La tarea más rápida en realizarse fue " + tareaRapida.tarea + ", que tardó " + ((tareaRapida.calculo.toLocaleString() % 60000) / 1000).toFixed(0));  
}
    
    
    /*lista.map(item => {
      if((item.fechaRealizacion - item.fechaCreacion)<masRapida)
      {
        masRapida=item.fechaRealizacion - item.fechaCreacion;
        idMasRapida=item.id;
      }})
      console.log(idMasRapida);
      return idMasRapida;*/
  

  return (
    <>
        <input onClick={()=>borrarTodo()} className="enviar" type="button" value="Borrar todo" />
        <input onClick={() => calcularTarea()} className="enviar" type="button" value="Calcular tarea" />
        <p>{parrafo}</p>
    </>
  )
}

import React from 'react'

export const Tarea = ({item, setTareas,lista}) => {
  const eliminarTarea = () =>{
    let indice = item.id;
    let aux = [...lista];
    aux.splice(indice-1,1);
    let i = indice-1;
    while (i>= 0 && i<aux.length)
    {
      aux[i].id--;
      i++;
    }
    setTareas(aux);
  }
  const chequearRealizacion = ({lista, item})=>{
    let aux = [...lista];
    if (aux[item.id] != "N/A")
    {
      item.fechaRealizacion = new Date().toLocaleString();
    }
    else 
    {
      item.fechaRealizacion = "N/A";
    }
    setTareas(aux);
  }

  return (
    <>
        <tr>
            <td id="indice">{item.id}</td>
            <td><input id="check" type="checkbox" onClick={({lista,item})=>chequearRealizacion}/></td>
            <td>{item.nombre}</td>
            <td>{item.fechaCreacion}</td>
            <td>{item.fechaRealizacion}</td>
            <td><img width="10%" className="borrar" src="src/images/TachoBorrar.png" onClick={()=>eliminarTarea(item.id)}/></td>
        </tr>
    </>
  )
}

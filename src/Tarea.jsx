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
  const marcarRealizado = ({item, lista})=>{
    let aux = [...lista];
    if (aux[item.id-1].fechaRealizacion == "N/A") 
    {
      aux[item.id-1].fechaRealizacion = new Date();
    }
    else 
    {
      aux[item.id-1].fechaRealizacion = "N/A";
    }

    
    console.log("marcó");
    setTareas(aux);
  }

  return (
    <>
        <tr>
            <td id="indice">{item.id}</td>
            <td><input id={item.id} type="checkbox" onClick={()=>marcarRealizado({item, lista})}/></td>
            <td>{item.nombre}</td>
            <td>{item.fechaCreacion.toLocaleString()}</td>
            <td>{item.fechaRealizacion.toLocaleString()}</td>
            <td><img width="10%" className="borrar" src="src/images/TachoBorrar.png" onClick={()=>eliminarTarea(item.id)}/></td>
        </tr>
    </>
  )
}

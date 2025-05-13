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
      aux[item.id-1].checked = true;
      document.getElementById(item.id).classList.add("resuelto");

    }
    else 
    {
      aux[item.id-1].fechaRealizacion = "N/A";
      aux[item.id-1].checked = false;
      document.getElementById(item.id).classList.remove("resuelto");
    }
    setTareas(aux);
  }

  return (
    <>
        <tr id={item.id}>
            <td id="indice">{item.id}</td>
            <td><input id={item.id} type="checkbox" checked={item.checked} onClick={()=>marcarRealizado({item, lista})}/></td>
            <td>{item.nombre}</td>
            <td>{item.fechaCreacion.toLocaleString()}</td>
            <td>{item.fechaRealizacion.toLocaleString()}</td>
            <td><img width="10%" className="borrar" src="src/images/TachoBorrar.png" onClick={()=>eliminarTarea(item.id)}/></td>
        </tr>
    </>
  )
}

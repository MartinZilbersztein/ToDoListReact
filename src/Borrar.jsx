import React from 'react'

export const Borrar = (id, items) => {
  const eliminar = () =>{
    items.pop(items[id]);
  }
  return (
    <td><img width="10%" class="borrar" src="src/images/TachoBorrar.png" onClick={eliminar()}/></td>
  )
}


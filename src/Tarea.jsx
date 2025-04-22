import React from 'react'

export const Tarea = ({item}) => {
  return (
    <>
        <tr>
            <td>{item.id}</td>
            <td><input type="checkbox" /></td>
            <td>{item.nombre}</td>
            <td>{item.fechaCreacion}</td>
            <td>{item.fechaRealizacion}</td>
            <td><img width="10%" class="borrar" src="src/images/TachoBorrar.png"/></td>
        </tr>
    </>
  )
}

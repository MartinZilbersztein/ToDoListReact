import React from 'react'
import { Tarea } from './Tarea'

export const Lista = ({lista, setTareas}) => {
    
    return (
    <>
        <table className="table table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Done</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Fecha creación</th>
                    <th scope="col">Fecha realización</th>
                    <th scope="col">Borrar</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                {lista.map(item=>(
                    <Tarea item={item} setTareas={setTareas} lista={lista} />
                ))}
            </tbody>
        </table>
    </>
  )
}

import React from 'react'
import { Borrar } from './Borrar'
import { Check } from './Check'

export const Tarea = () => {
  return (
    <>
        <tr>
            <th scope="row"></th>
            <Check/>
            <td>gola</td>
            <td>hola</td>
            <td>hola</td>
            <Borrar/>
        </tr>
    </>
  )
}

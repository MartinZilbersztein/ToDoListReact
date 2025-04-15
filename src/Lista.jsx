import React from 'react'
import { Tarea } from './Tarea'
import {useState} from 'react'

export const Lista = ({items}) => {
    return (
    <>
        <table class="table table-hover table-responsive">
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
            </tbody>
        </table>
    </>
  )
}

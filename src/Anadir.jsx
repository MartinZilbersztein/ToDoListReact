import React from 'react'
import {Input} from './Input'
import { Boton } from './Boton'

export const Anadir = () => {
  return (
    <>
        <h1>To-do</h1>
        <Input/>
        <Boton nombreFuncion="Enviar"/>
    </>
  )
}

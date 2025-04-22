import React from 'react'
import {Input} from './Input'
import { Boton } from './Boton'
import { useState } from 'react';

export const Anadir = (items) => {
  return (
    <>
        <h1>To-do</h1>
        <Input/>
        <Boton nombreFuncion="Enviar" array={items} />
    </>
  )
}

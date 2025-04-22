import React, {useState} from 'react'

export const Boton = ({nombreFuncion}, items) => {
  return (
    <input class="enviar" type="submit" value={nombreFuncion}/>
  )
}

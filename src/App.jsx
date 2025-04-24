import { Anadir } from './Anadir'
import './App.css'
import { BotonesExtra } from './BotonesExtra';
import { Lista } from './Lista'
import { useState } from 'react'

function App() {
  const [tareas,setTareas] = useState([]);

  return (
    <>
      <Anadir tareas={tareas} setTareas={setTareas}/>
      <BotonesExtra lista={tareas} setTareas={setTareas}/>
      <Lista lista={tareas} setTareas={setTareas}/>
    </>
  )
}

export default App

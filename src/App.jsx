import { Anadir } from './Anadir'
import './App.css'
import { Lista } from './Lista'
import { useState } from 'react'

function App() {
  const [tareas,setTareas] = useState([]);

  return (
    <>
      <Anadir tareas={tareas} setTareas={setTareas}/>
      
      <Lista lista={tareas}/>
    </>
  )
}

export default App

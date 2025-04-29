import { Anadir } from './Anadir'
import { BotonesExtra } from './BotonesExtra';
import { Lista } from './Lista'
import { useState } from 'react'

function App() {
  const [tareas,setTareas] = useState([]);//Inicializado como array vacío
  return (
      <div className="container">
          <Anadir tareas={tareas} setTareas={setTareas}/>
          <BotonesExtra lista={tareas} setTareas={setTareas}/>
          <Lista lista={tareas} setTareas={setTareas}/>
      </div>
  )
}

export default App

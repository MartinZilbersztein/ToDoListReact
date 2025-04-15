import { Anadir } from './Anadir'
import './App.css'
import { Lista } from './Lista'
import { Boton } from './Boton'

function App() {
let items = [];
  return (
    <>
      <Anadir/>
      <Boton nombreFuncion="Borrar todo"/>
      <Boton nombreFuncion="Ver tarea más rápida"/>
      <Lista lista={items}/>
    </>
  )
}

export default App

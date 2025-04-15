import { Anadir } from './Anadir'
import './App.css'
import { Lista } from './Lista'
import { Boton } from './Boton'

let items = ["hola", "adsasd"];
function App() {
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

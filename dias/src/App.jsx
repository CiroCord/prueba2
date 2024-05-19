import Clase2 from './components/clase2/Clase2'
import './App.css'
import Dia1 from './Dia1'
import Contador from './components/clase2/Contador'
import Condicion from './components/clase2/Condicion'
import Prueba from './components/clase2/Prueba'
import Nota from './components/clase4/Nota'
import Practica1 from './components/clase4/Practica1'
import Apis from './components/clase4/Apis'
import Formulario from './components/clase5/Formulario1'


function App() {
  return (
    <>
    <Dia1/>
    <p>------------------------</p>
    <Clase2 nombre = "Ciro" edad={17}></Clase2>
    <Clase2 nombre = "Pepe" edad={55}></Clase2>
    <Clase2 nombre = "Loshi" edad={17}></Clase2>
    <Contador></Contador>
    <Condicion condicion={10>20}></Condicion>
    <Prueba></Prueba>
    <p>---------</p>
    <Nota></Nota>
    <Practica1></Practica1>
    <Formulario></Formulario>
    <div>
    <h1>App React con MockAPI.io</h1>
    <UserList></UserList>
    </div>
    
    </>
    
  )
}

export default App

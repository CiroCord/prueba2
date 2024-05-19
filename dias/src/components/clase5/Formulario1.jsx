import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
const Formulario=()=>{
const[datos, setDatos]=useState({
    nombre:'',
    apellido:'',
    edad:''
})
const[formLleno, setFormLleno]=useState(false)

const manejoCambioTexto=(event)=>{
    setDatos({
        ...datos,[event.target.name]:event.target.value
    })
}
const enviarDatos=(event)=>{
    event.preventDefault()
    setFormLleno(true)
}
console.log(datos)
return(
    <>
    {
        formLleno ?
        
        <>
        <h1>"Gracias por respondernos"</h1>
        <p>Nombre: {datos.nombre}</p>
        <p>Apellido: {datos.apellido}</p>
        <p>Edad: {datos.edad}</p></>
        
        :
        <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-4">
                <input type="text" placeholder="Nombre" className="form-control" onChange={manejoCambioTexto} name='nombre'/>
            </div>
            <div className="col-md-4">
                <input type="text" placeholder="Apellido" className="form-control" onChange={manejoCambioTexto} name='apellido'/>
            </div>
            <div className="col-md-4">
                <input type="quantity" placeholder="Edad" className="form-control" onChange={manejoCambioTexto} name='edad'/>
            </div>
    
        <button type="submit" className="btn btn-primary">Enviar</button>
        
        </form>
    }
    
    </>
)

}
export default Formulario
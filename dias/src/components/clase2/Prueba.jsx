import { useState } from "react";

const Prueba = ()=>{

    const[contador,setContador]=useState(0)
    const[tuNombre,setNombre]=useState("")
    const incrementar =()=>{
        setContador(contador + 1)
    }
    const decremento =()=>{
        setContador(contador - 1)
    }
    const nombre=(event)=>{
        setNombre(event.target.value);
    }
    return(
        <>
    <div>
        <input type="text" value={tuNombre} onChange={nombre}/>
        <p>EDAD: {contador}</p>
        <button onClick={incrementar}>MAS</button>
        <button onClick={decremento}>MENOS</button>
        <p>{tuNombre} tiene {contador} años.</p>
    </div>
        </>
    )
}
export default Prueba
import { useState } from "react";

const Contador = ()=>{
    const[contador,setContador]=useState(0)
    const incrementar =()=>{
        setContador(contador + 1)
    }
    const decremento =()=>{
        setContador(contador - 1)
    }
    return(
        <>
    <div>
        <p>{contador}</p>
        <button onClick={incrementar}>SUMAME</button>
        <button onClick={decremento}>RESTAME</button>
    </div>
        </>
    )
}
export default Contador
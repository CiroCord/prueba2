import { useState } from "react";

const Practica1 = ()=>{
    const[nombre,setNombre]=useState("Ciro")
    const cambiarNombre=()=>{
        setNombre("Loshi")
    }
    return(
        <>
        <h1>{nombre}</h1>
        <button onClick={cambiarNombre}>CLICKEA PARA VER CON QUIEN ESTA DESTINADO A VIVIR</button>
        </>
    )
}
export default Practica1
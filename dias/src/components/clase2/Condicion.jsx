import React from "react";

const Condicion = ({condicion})=>{
    if(condicion){
        return(
            <>
            <p>Condicion VERDADERA</p>
            </>
        );
    }
    else{
        return(
            <>
            <p>Condicion FALSA</p>
            </>
        );
    }
   
}
export default Condicion;
import React,{useState, useEffect} from "react";
const UserList = ()=> {
    const[users, setUsears]=useState([]);
    const [loading, setloading]=useState(true)
    const apiUrl="https://66467b8151e227f23aaf0c51.mockapi.io/:endpoint"
    useEffect(()=>{
        fetch(apiUrl)//TRAER
        .then((response)=> response.json())//ENTONCES
        .then((data)=> setUsears(data))
        .catch((error)>console.log("Error al obtener usuarios", error))//ERROR
        .finally(()=>{
            setLoading(false);
});
}, [apiUrl]);
console.log(loading);

 return (
<div>
<h2>Lista de Usuarios</h2>
{loading ? (
<h1>Cargando...</h1>
) : (
<ul>
{users.map((Tabla) => (
<li key={Tabla.nombre}>{Tabla.apellido}</li>
))}
</ul>
)}
</div>
);
};

export default UserList;
const objeto=[
    {Nombre: "Ciro", Apellido:"Cordara", edad:19},
    {Nombre: "Guada", Apellido:"Lojo", edad:17}
]
const menor = objeto.filter(objeto => objeto.edad<=18);
console.log(menor);

const linda = objeto.find(objeto => objeto.Apellido === "Lojo");
console.log(linda);
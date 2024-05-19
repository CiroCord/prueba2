const url='https://jsonplaceholder.typicode.com/albums'
fetch(url)//TRAER
.then(res=> res.json())//ENTONCES
.then(data=> console.log(data[1].title))
.catch()//ERROR
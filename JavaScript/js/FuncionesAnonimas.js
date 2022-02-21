// // funcion declarativa
// function numeroAleatorio(min, max){
//     return Math.floor(Math.random() * (max - min)) + min
// }

// console.log(numeroAleatorio(10, 21));

// Funcion expresada
// const numAzar = function(min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(numAzar(100, 201))

// const azarFlecha = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// const azarFlecha = (min, max) =>
//      Math.floor(Math.random() * (max - min)) + min;

const azarFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha(1, 10));

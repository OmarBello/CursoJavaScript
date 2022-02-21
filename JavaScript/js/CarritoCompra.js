const frutas = [];

const fruta = prompt("Feria Market, Que fruta desea comprar?");

frutas.push(fruta);

while (confirm("Desea agregar otro elemento al carrito?")) {
  const fruta = prompt("Que fruta desea comprar?");
  frutas.push(fruta);
}

console.log("Compraste: ");
// for (const fruta of frutas){
//     console.log(fruta);
// }

frutas.forEach((fruta) => console.log(fruta));

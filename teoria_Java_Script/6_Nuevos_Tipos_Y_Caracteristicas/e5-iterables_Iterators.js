/* --------------- ITERABLES - ITERATORS ----------- */

/* Los elementos iterables son los elementos que se pueden recorrer como los nodos del DOM, los arrays, los string, las cadenas de textos, los map */

let iterable1 = [1, 2, 3, 4];
let iterable2 = "Hola Mundo";
let iterable3 = new Set([1, 2, 2, 2, 3, 3, 4]);
let iterable4 = new Map([
  ["nombre", "Marcelo"],
  ["Apellido", "Giaccaglia"],
]);

/* El iterador es el metodo que realiza, en este caso es uno especial */

let iterator1 = iterable1[Symbol.iterator]();
let iterator2 = iterable2[Symbol.iterator]();
let iterator3 = iterable3[Symbol.iterator]();
let iterator4 = iterable4[Symbol.iterator]();

/* resultados */

console.log(iterator1);
console.log(iterator2);
console.log(iterator3);
console.log(iterator4);

/* metodo next() nos dara informacion por cada posicion */
console.log(iterator1.next());
console.log(iterator1.next());

/* una forma mas esclable del uso de next() */

let next = iterator1.next();
while (!next.done) {
  console.log(next.value);
  next = iterator1.next();
}

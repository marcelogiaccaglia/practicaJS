/* ----------------- GENERATOR ----------------- */

/* Los generadores convierten el codigo de una funcion en un iterable */

/* una funcion generadora es la que tiene un * pegado, esto nos permite acceder directamente al Symbol.iterator() */

function* iterable() {
  yield "Hola 1";
  console.log("hola consola");
  yield "Hola 2";
  console.log("va de nuevo consola");
  yield "Hola 3";
}
/* yield funciona como un return y para seguir al proximo yield, este espera el llamado del proximo next() */

let iterador = iterable();

console.log(iterador.next());
console.log(iterador.next());

for (let y of iterador) {
  console.log(y);
}

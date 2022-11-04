/* Propiedades del API del DOM para recorrer Nodos elementos(etiquetas html) */

const $cards =
  document.querySelector(".cards"); /* Creamos una variable del DOM */

console.log($cards);
console.log($cards.children); /* Hijos de la clase, lo que contiene */
console.log($cards.children[2]);
console.log(
  $cards.parentElement
); /* Retorna el elemento o nodo padre o sea el body en este caso */
console.log(
  $cards.firstElementChild
); /* El primer nodo es el el salto o espacio con enter(si usamos el firstChild),para este caso obtenemos el primer elemento */
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling); /* elemento hemano */
console.log($cards.nextElementSibling);
console.log($cards.closest("div")); /* busca el padre mas cercano */
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));

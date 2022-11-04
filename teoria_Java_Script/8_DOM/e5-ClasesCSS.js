/* Trabajar con clases capturando dicha clase y pudiendo agragar, modificar, eliminar o verificar con sus propiedades los valores contenidos */

const $card = document.querySelector(".card");

console.log($card);
console.log(
  $card.className
); /* Para conocer los nombres de las clases que posee dicha clase*/
console.log(
  $card.classList
); /* Para conocer valores de la clase especificada, muestra la cantidad de elemento que posee el class */
console.log(
  $card.classList.contains("rotate-45")
); /* Consultamos con una respuesta de true o false */
$card.classList.add("rotate-45"); /* Le aplicamos un estilo  */
console.log(
  $card.classList.contains("rotate-45")
); /* Verificamos que la clase se haya aplicado */
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45"); /* Eliminamos la clase espicificada */
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle(
  "rotate-45"
); /* El toggle o palanca funciona quitando o agrgado una clase dependiendo del estado de dicha clase en la que estamos trabando, ej. si la clase tiene la clase especificada, el toggle se la quita */
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace(
  "rotate-45",
  "rotate-135"
); /* Remplaza una clase por otro especificada */
$card.classList.add(
  "opacity-80",
  "sepia"
); /* accionar con varias clases al mismo tiempo */
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");

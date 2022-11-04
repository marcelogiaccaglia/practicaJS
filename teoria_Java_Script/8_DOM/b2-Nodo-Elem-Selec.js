/* Metodos o propiedades para capturar etiquetas, clases, nombres, atributos del DOM */

console.log(
  document.getElementsByTagName("li")
); /* Capturo el nombre de etiqueta seleccionado */
console.log(
  document.getElementsByClassName("card")
); /* Capturo el nombre Class seleccionado (no se coloca punto) */
console.log(
  document.getElementsByName("nombre")
); /* Capturo el input con el nombre del name */
/* Los 3 primeros no se usan mas */
console.log(
  document.getElementById("menu")
); /* Captura mediante el Id seleccionado (no se coloca #) */
console.log(
  document.querySelector("a")
); /* Captura el primer selector en la lista de selectores seleccionados del html (aca podemos usar para capturar Tag, Class con punto, Name de input, Id con #) */
console.log(
  document.querySelectorAll("a")
); /* Captura todos los selectores seleccionados del html */
console.log(
  document.querySelectorAll("a").length
); /* Me da la longitud de este Nodelist */
document
  .querySelectorAll("a")
  .forEach((el) =>
    console.log(el)
  ); /* Uno de los metodos a utilizar para recorrer este Nodelist */
console.log(
  document.querySelector(".card")
); /* Captura el primer class seleccionado */
console.log(
  document.querySelectorAll(".card")
); /* Captura todos los class del html que se ha especificado */
console.log(
  document.querySelectorAll(".card")[2]
); /* Captura la posicion 2 de la Nodelist obtenida por la class especificada y capturada */
console.log(
  document.querySelector("#menu li")
); /* Captura el primer li con Id especificado dentro del html */
console.log(
  document.querySelectorAll("#menu li")
); /* Captura todos los li con Id especificado dentro del html */

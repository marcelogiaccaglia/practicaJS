/* Atributos de HTML */
/* Los atributos que tienen las etiquetas html son por ejemplo lo que esta dentro de la etiqueta dandole valores, como type, name, src, placeholder, etc */
/* Los data attributes son atributos creados por el programador, dandole la definicion a su antojo, html exige iniciar con data-(aca adentro colocamos lo que querramos)="un nombre" */

console.log(
  document.documentElement.lang
); /* Capturamos el atributo especificado (no se recomienda su uso) */
console.log(
  document.documentElement.getAttribute("lang")
); /* Capturamos el atributo especificado (confiable) */
/* Ejemplo del por que no es bueno el especificar un atributo sin el uso del getAttribute*/
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang =
  "en"; /* Cambiamos el valor del atributo especificado */
console.log(document.documentElement.lang);
document.documentElement.setAttribute(
  "lang",
  "es-MX"
); /* Cambiamos el valor del atributo especificado (Confiable) */
console.log(document.documentElement.lang);

const $linkDOM =
  document.querySelector(
    ".link-dom"
  ); /* Para la simplificacion de estas pruebas guardamos en una varible el valor de los capturado, es importante indicar que como buena practica, cuando guaramos en una variable valores del DOM se le antepone un $ al nombre de dicha variable para que todos sepan que esta es un valor del DOM */

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute(
  "rel",
  "noopener"
); /* Agregamos un atributo para evitar el hack al utilizar _blank con esta linea de codigo */
$linkDOM.setAttribute(
  "href",
  "https://youtube.com/jonmircha"
); /*Cambiamos el valor de un atributo, este estara cambiado a nivel del DOM pero nunca en el codigo base del html  */
console.log(
  $linkDOM.hasAttribute("rel")
); /* Consultamos si existe el atributo especificado */
$linkDOM.removeAttribute("rel"); /* Borramos el atributo especificado */
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log(
  $linkDOM.getAttribute("data-description")
); /* Capturamos el contenido del data-attribute especificado */
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute(
  "data-description",
  "Modelo de Objeto del Documento"
); /* Realizamos un cambio en el valor en el atributo especificado */
console.log(
  $linkDOM.dataset.description
); /* Capturamos el valor del data attribute especificado */
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));

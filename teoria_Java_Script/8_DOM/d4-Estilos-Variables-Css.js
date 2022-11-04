/* Atributos de CSS */
/* Capturamos un atributo y podemos trabajar con los valores del mismo */

const $linkDOM = document.querySelector(".link-dom");

console.log(
  $linkDOM.style
); /* Capturamos el atributo especificado, pero de esta manera obtenemos un mapeo de de dicho atributo con todas los estilos de CSS como propiedades del atributo */
console.log(
  $linkDOM.getAttribute("style")
); /* Con esta captura del atributo solo se obtiene el contenido de dicho atributo */
console.log(
  $linkDOM.style.backgroundColor
); /* Capturamos uno de los estilos que posee el atributo especificado */
console.log($linkDOM.style.color);
console.log(
  window.getComputedStyle($linkDOM)
); /* Captura todo los atributos pero en este caso nos etrega un mapeo con infoamcion de todas las propiedades dinamicas de CSS */
console.log(
  getComputedStyle($linkDOM).getPropertyValue("color")
); /* En este caso podemos obtener el valor contenido en una de las propiedasdes del atributo especificados - Por otro lado no usamos window ya que el comando pertenece a dicho parametro */

$linkDOM.style.setProperty(
  "text-decoration",
  "none"
); /* Para setear valores a un atributo especificado (en este caso el atributo es especficado con guion como en CSS) */
$linkDOM.style.setProperty("display", "block");

$linkDOM.style.width =
  "50%"; /* Setear un valor a un atributo con el uso del punto */
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log(
  $linkDOM.style
); /* En CSS declaration veremos los nuevos datos mapeados */
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html =
    document.documentElement /* Este elemento representa la etiqueta HTML (documentElement) */,
  $body = document.body;

let varDarkColor =
    getComputedStyle($html).getPropertyValue(
      "--dark-color"
    ) /* Creamos variables normales que contienen las caracteristicas del color especificado por el :root */,
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(
  varDarkColor,
  varYellowColor
); /* Odemos observar en consola los valores capturados */

$body.style.backgroundColor =
  varDarkColor; /* Le aplicamos el color de la variable al atributo especificado del body */
$body.style.color = varYellowColor;

$html.style.setProperty(
  "--dark-color",
  "#000"
); /* Podemos setear un nuevo valor de color en el :root especificado (NOTA: Los cambios no aplican automaticamente a las anteriores asignaciones que se hayan dado a etiquetas, por lo que se debera preceder a aplicar este nuevo valor) */
varDarkColor =
  getComputedStyle($html).getPropertyValue(
    "--dark-color"
  ); /* Capturamos el neuvo valor */

$body.style.setProperty(
  "background-color",
  varDarkColor
); /* Le asignamos el nuevo valor al atributo especificado con la notacion del punto o con setProperty */

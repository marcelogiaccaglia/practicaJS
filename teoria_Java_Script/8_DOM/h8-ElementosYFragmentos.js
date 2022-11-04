/* Como Crear un elemento HTML desde JS, agregar un Nodo en foma dinamica  */

const $figure =
    document.createElement(
      "figure"
    ) /* Con esta metodo podemos crear etiquetas validas de HTML o XML */,
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText =
    document.createTextNode(
      "Animals"
    ) /* Como crear un nodo de texto para la etiqueta figcaption */,
  $cards =
    document.querySelector(
      ".cards"
    ) /* Capturamos una clase y la guardamos en una variable de DOM */,
  $figure2 = document.createElement("figure");

/* agregamos atributos a las etiquetas creadas y almacenadas en las variable, como tambien asi le agregamos una clase */
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

/* Con esta propiedad a las variables o etiquetas almacenadas le insertamos internamente a modo de hijo las etiquetas creadas para crear la estructura interna */
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
/* IMPORTANTE: tener en cuenta el orden de los agregados e insersiones */

/* Con esta forma creamos un nuevo nodo como el ejemplo anterior, pero JS no lo reconocera a cada parte como un nodo independiente, en el ejemplo anterior si */
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");

$cards.appendChild($figure2);

/* Si quisieramos hacer inserciones dinamicas de infomacion de todo tipo unn ejemplo es:... */
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent =
    el; /* Utilizamos esta propiedad ya que el contenido del array son strings */
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML =
  ""; /* El uso de esta propiedad es valida para vizualisacion pero Js no lo reconoce como un NODO */
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

/* Para el caso de que la informacion a insertar dinamicamente al DOM sea a gran escala, los anteriores ejemplos no son escalables ya que cada insercion le pega en la vizualizacion del DOM relentizando la aplicacion, por lo que la siguiente opcion es mas escalable*/
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment =
    document.createDocumentFragment(); /* El uso de la propiedad createDocumentFregment, lo que buscamos es de insertar todo la infomacion pedida a la base de datos, enviarsela a ese fragmento para luego enviar como una sola insercion al DOM toda la info recolectada */

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild(
    $li
  ); /* cada iteracion sera agregada a la variable de la propiedad del fragmento */
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild(
  $fragment
); /* Agregamos todo el fragmento a la etiqueta especificada */
document.body.appendChild($ul3);

/* Nuevas propiedades de JS para el manejo del DOM mediante su API */

/*
.insertAdjacent...
  .insertAdjacentElement(position, el) --Igual a apendchild--
  .insertAdjacentHTML(position, html) --Igual a innerHtml--
  .insertAdjacentText(position, text) --Igual a textContent--

Posiciones: --agregados a las anteriores propiedades en el valor "position"--
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

/* 
//$cards.prepend($newCard); --hijo primero--
//$cards.append($newCard); --Ultimo Hijo--
//$cards.before($newCard); --Hermano anterior--
//$cards.after($newCard); --Hermano ultimo--
*/

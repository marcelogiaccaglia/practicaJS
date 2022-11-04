/* Como al crear un nuevo elemento, remplazarlo por otro existente, borrar o insertarlo en un lugar especifico */

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards =
    $cards.cloneNode(
      true
    ); /* propiedad para clonar nodos, con el uso del True clonamos el nodo con toda su info, caso contrario solo clonamos su etiqueta */

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
/* Remplazamos un elemento en una posicion especifica por otro elemento */

//$cards.removeChild($cards.lastElementChild);/* Borramos un elemento y especificamos cual */

$cards.insertBefore(
  $newCard,
  $cards.firstElementChild
); /* insertamos un elemento en una posicion especifica */

document.body.appendChild($cloneCards);

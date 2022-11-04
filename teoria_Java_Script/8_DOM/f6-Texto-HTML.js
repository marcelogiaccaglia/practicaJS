/* Como trabajar del contenido textual  y html */

const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

//$whatIsDOM.innerText = text; /* No se usa mas- fue creada para Int Explorer */

$whatIsDOM.textContent =
  text; /* Para agrgar contenido textual pero no interpreta las etiqueta html */

$whatIsDOM.innerHTML =
  text; /* remplaza el contenido del nodo e interpreta las etiquetas html */
$whatIsDOM.outerHTML =
  text; /* Para mejorar la semantica y que no exista errores como un  <p> dentro de otro <p> */

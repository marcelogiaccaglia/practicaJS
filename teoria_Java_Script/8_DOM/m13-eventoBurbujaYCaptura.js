/* El addEventListener tiene un tercer parametro (true o false), controla el flujo de evento que por defecto los navegadores trabajan desde los elementos internos a los externos (false) */

const $divsEventos =
  document.querySelectorAll(
    ".eventos-flujo div"
  ); /* Capturamos todos las etiquetas div que posee la etiqueta section */

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
} /* Creamos un manejador de evento con una funcion */

console.log($divsEventos);

/* Creamos un forEach para que aplique un evento a cada elemento que contiene la variable del DOM */
$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);

  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  });
});
/* se puede pasar un objeto como tercer parametro donde se especifica el estado del capture (false por defecto o sea fase burbuja), y se puede pasar un parametro la cual puede aplicarse el evento una sola vez */

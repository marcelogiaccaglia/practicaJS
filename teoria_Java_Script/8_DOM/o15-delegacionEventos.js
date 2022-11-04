/* Con esta forma aplicamos los eventos a un elemento superior como el document, para evitar la repeticion en forma escalable de los eventos mas utilizados */

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this} el click lo originó ${e.target.className}`
  );
  //e.stopPropagation();
}

/* aplicamos el listener de eventos directamente al documento, en sus parametros le especificamos el evento, luego dentro de la funcion manejadora le aplicamos un condicional donde utilizamos la propiedad matches del event para buscar coincidencias. Sintetizando, con la funcion manejadora buscamos si el evento especificado fue aplicado en la etiqueta o clase indicada, en el caso de ser true, se ejecutara lo deseado en a funcion */
document.addEventListener("click", (e) => {
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  } /* Coincidencia True, ejecuta funcion flujoEventos */

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();
    //e.stopPropagation();
  } /* Coincidencia True ejecuta la propiedad preventDefault() sobre la etiqueta */
});

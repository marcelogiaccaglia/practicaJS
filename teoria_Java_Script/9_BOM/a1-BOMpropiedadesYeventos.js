/* el API del BOM nos permite manejar y controlar todas las propiedades del browser */

/* El evento resize de window se ejecuta por cada redimencionamiento del browser */
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth); /* Tamaño del viewport */
  console.log(window.innerHeight);
  console.log(window.outerWidth); /* Tamaño de todo el navegador */
  console.log(window.outerHeight);
  console.log(e);
});

/* El evento scroll de window se ejecuta al hacer scroll con el mouse o las barras de desplazamiento */
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX); /* Cuanto se aleja del margen TOP */
  console.log(window.scrollY); /* Cuanto se aleja del margen LEFT */
  console.log(e);
});

/* El evento Load de window se ejecuta justo cuando la ventana del navegador se haya cargado por completo (se ejecuta cuando este totalmente parceada y todas  sus hojas de estilos o relacionales tambien esten cagadas, haciendola mas lenta) */
window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(
    window.screenX
  ); /* desde que px se empieza a dibujar la pantalla */
  console.log(window.screenY);
  console.log(e);
});

/* El evento DOMContentLoader se ejecuta sobre el document, este evento no espera a finalizar la carga de hojas de estilo o relacionales para ejecutarse haciendola mas rapida */
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

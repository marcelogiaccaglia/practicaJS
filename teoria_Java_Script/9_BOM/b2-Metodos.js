/*  */

window.alert("Alerta");
window.confirm(
  "Confirmación"
); /* Valida a True o False que se puede guardar en una variable */
window.prompt(
  "Aviso"
); /* Se puede guardar el mensaje o las validaciones de True o False en una variable */

/* Creamos las variables del DOM */
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

/* Este evento open abre una ventana con el evento especificado */
$btnAbrir.addEventListener(
  "click",
  (e) =>
    (ventana = window.open(
      "https://jonmircha.com"
    )) /* Asignamos la ventana a abrir a una variable para luego llamando a esta varible y cerrarla */
);

/* Este evento close cierra una ventana con el evento especificado */
$btnCerrar.addEventListener("click", (e) => {
  //window.close(); /* No debe usarse window por que cierra la ventana donde se aplica el evento */
  ventana.close();
});

/* Este evento print imprime toda la ventana con el evento especificado */
$btnImprimir.addEventListener("click", (e) => window.print());

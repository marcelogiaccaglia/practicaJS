/*  -------------------- TEMPORIZADORES -------------------- */

/* ---- SETTIMEOUT ---- */
/* El codigo que esta dentro funcion se ejecutara al cumplir el tiempo expresado al final en mili segundos, este codigo se ejecuta una sola vez. Esta funcion se la debe colocar dentro de una variable */

console.log("Inicio de Prueba");

let setTimeOuts = setTimeout(() => {
  console.log("Ejecutandose setTimeOut");
}, 3000);

/* Para cortar la ejecucion de setTimeOut, utilizamos el metodo clearTimeOut, el cual solamente llama a la variable q la contiene */

setTimeout(() => {
  clearTimeout(setTimeOuts);
}, 4000);

/* -------- SETINTERVAL ---------- */
/* El codigo que esta dentro funcion se ejecutara al cumplir el tiempo expresado al final en mili segundos, este codigo se ejecuta indefinidamente. Esta funcion se la debe colocar dentro de una variable */

let setIntervals = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

/* Para cortar la ejecucion de setInterval, utilizamos el metodo clearInterval, el cual solamente llama a la variable q la contiene */

setTimeout(() => {
  clearInterval(setIntervals);
}, 9000);

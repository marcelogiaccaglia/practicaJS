/* -------- // CICLOS - FOR // ------- */

/* Funcion que repite instrucciones dependiendo de la condicion

  for(variable de inicio, condicion, modificador){
      Codigo a ejecutar en cada repeticion;
      }; */
console.log("--CICLO FOR--");

let arr = [1, 3, 5, 7, 9, 11, 13, 15];
let element = [];

/* Sitaxis - variable inicial - condicion (true) sigue - modificador de variable inicial (++ , --) */

for (let index = 0; index < arr.length; index++) {
  element.push(arr[index]);
}
console.log(element);

/* ------------ // FOR IN // ------------ */

/* Solo para iterar sobre OBJETOS LITERALES */
/* Sintaxis = for (let propiedad in objeto a iterar) */
console.log("--CICLO FOR IN--");

let persona = {
  nombre: "Guillermo",
  edad: 23,
};

for (const newPersona in persona) {
  if (Object.hasOwnProperty.call(persona, newPersona)) {
    const element = persona[newPersona];
    console.log(element);
    console.log(newPersona, persona[newPersona]);
  }
}

/* ------------- // FOR OF // -------------- */

/* Solo para iterar sobre array o string */
/* Sintaxis = for(let variable of elemento) {} */
console.log("--CICLO FOR OF--");

let musicos = ["Charly", "Spinetta", "Fito"];

for (const musico of musicos) {
  console.log(musico);
}

/* -----------// BREAK && CONTINUE // ------------ */

/* BREAK es utilizado para cortar la iteracion del ciclo en un momento determinado o buscado */ console.log(
  "--BREAK--"
);

let brek = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 11) {
    break;
  }
  brek.push(arr[i]);
}

console.log(brek);

/* CONTINUE es utilizado para cortar la iteracion solo del ciclo indicado para luego hacer un salto y retomar con lo que queda de iteracion en el caso de corresponder */ console.log(
  "--CONTINUE--"
);

let continu = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 9) {
    continue;
  }
  continu.push(arr[i]);
}

console.log(continu);

/* --------- // WHILE // ------------ */

/* Consta de dos partes, Condicion y bloque de codigo (SIN USO ACTUAL)*/
console.log("--CICLO WHILE--");

let contador = 0;

while (contador <= 5) {
  let newContador = [];
  newContador.push(contador);
  contador++;
  console.log(newContador);
}

/* La sintaxis la compone, primero la condicion a evaluar, luego el codigo a ejecutar si la condicion es (true), por ultimo el incrementador necesario para evitar un bucle infinito */

/* --------- // DO WHILE // -------------- */

/* Primero ejecuta el codigo y luego evaluala condicion, en el caso de ser (true) nuevamente ejecuta el codigo (SIN USO ACTUAL)*/
console.log("--CICLO DO WHILE--");

let diaSemana = 1;

do {
  console.log("Dia de la Semana N° " + diaSemana);
  diaSemana++;
} while (diaSemana <= 7);

/* Sintaxis - codigo a ejecutar, incrementador para controlar el bucle, condicion a validar */
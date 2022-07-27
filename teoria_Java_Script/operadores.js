/* ----------------- // OPERADORES // ---------------- */

// El signo (=) se lo denomina de asigancion, con el mismo se le asigna valor a una variable //

/* ----- Arismeticos ---- */ console.log("--Arismeticos--");

let suma = 2 + 4;
console.log(suma);

let resta = 2 - 5;
console.log(resta);

let multi = 2 * 4;
console.log(multi);

let divi = 2 / 4;
console.log(divi);

let incrementa = 3; // ++
console.log(++incrementa);

let decrementa = 2; // --
console.log(--decrementa);

let resto =
  15 %
  2; /* Obtenemos el resto de una division, en este ejemplo 2*7=14, sobra 1 */
console.log(resto);

/* ---- Comparacion simple ----- */ console.log("--Comparacion simple--");

let num1 = 42; /* El resultado sera siempre un Booleano */
let num2 = "42";

/* Pregunta si el elemento es igual al otro sin importar si es string o num */
let compSimple = num1 == num2;
console.log(compSimple);

/* Niega comparativa retornando lo contrario a la realidad */
let compSimpleF = num1 != num2;
console.log(compSimpleF);

/* Compara si es igual en todo sentido */
let compEstric = num1 === num2;
console.log(compEstric);

/* Niega comparativa retornando lo contrario a la realidad */
let compEstricF = num1 !== num2;
console.log(compEstricF);

let comp1 = num1 <= num2; /* menor o igual a */
console.log(comp1);

let comp2 = num1 >= num2; /* mayor o igual a */
console.log(comp2);

/* ---- Logicos ------ */ console.log("--Logicos--");

//(and) las dos comparaciones deben dar true, true+true = true//
let respuesta;
if (24 > 20 && 40 > 5) {
  respuesta = "verdad";
}
console.log(respuesta);

//(or) al menos una de las comparaciones debe ser true, false+true = true//
if (24 > 20 || 20 < 3) {
  console.log("asi es OR");
}

//(not) retorna lo contrario a la comparativa, !false = true//
if (!24 < 20) {
  console.log("asi es NOT");
}

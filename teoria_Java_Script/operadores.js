/* ----------------- // OPERADORES // ---------------- */

// El signo (=) se lo denomina de asigancion, con el mismo se le asigna valor a una variable //

/* En operaciones matematicas el orden de ejecucion es el siguiente 1° (), 2° raiz o potencias, 3° * / , 4° + - , de Izquierda a Derecha */

/* ----- Arismeticos ---- */ console.log("--Arismeticos--");

let suma = 2 + 4;
console.log(suma);

let resta = 2 - 5;
console.log(resta);

let multi = 2 * 4;
console.log(multi);

let divi = 2 / 4;
console.log(divi);

/* Incremento o Decremento (+= , -= , *= , /=) o (i++ o i--), no se recomienda el uso de (++i o --i) */

let incrementa = 3;
console.log(incrementa++);
console.log((incrementa += 1));

let decrementa = 2;
console.log(decrementa--);
console.log((decrementa -= 1));

/* Obtenemos el resto o modulo de una division, en este ejemplo 2*7=14, sobra 1 */

let resto_modulo = 15 % 2;
console.log(resto_modulo);

/* ---- Comparacion simple ----- */ console.log("--Comparacion simple--");

let num1 = 42; /* El resultado sera siempre un Booleano */
let num2 = "42";

/* Pregunta si el elemento es igual al otro sin importar si es string o num (NO USAR)*/
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

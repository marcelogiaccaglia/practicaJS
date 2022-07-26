/* -----------// CONDICIONALES // --------------- */

let adolec = [15, 17];
let salida = {};

/* Condicionales Simples */

if (adolec[0] >= 12 && adolec[0] <= 18) {
  salida.condicion = "Estas para la matine";
}
console.log(salida);

/* Condicional else */

if (adolec[1] > 18 || adolec[0] == 17) {
  salida.alcohol = "Podes tomar alcohol";
} else {
  salida.alcohol = "No podes tomar alcohol";
}
console.log(salida);

/* Condicional else if */

if (adolec[1] > 18) {
  salida.alcoholLigth = "Podes tomar alcohol";
} else if (adolec[1] > 18 || adolec[1] == 17) {
  salida.alcoholLigth = "Podes tomar alcohol de baja graduacion";
} else {
  salida.alcoholLigth = "No podes tomar alcohol";
}
console.log(salida);

/* ---------- // IF TERNARIO // --------------- */

/* No se usa la palabra if ni else, y se recomienda agregar este condicional dentro de una variable */

// Sintaxis
let resultado =
  4 < 10 ? "primera expresion (True)" : "segunda expresion (False)";

/* la segunda expresion debe tener codigo, en caso de no buscar un resultado colocar un string vacio " " */

let mayor = 4 > 10 ? "el 4 es mas grande" : "el 10 es mas grande";
console.log(mayor);

/* --------------// SWICH // ---------- */

//Compuesto por una exprecion a evaluar

switch ("manzana") {
  case "pera": //codigo q se ejecuta si es True
    console.log("aca no hay manzanas");
    break;
  case "manzana":
    console.log("aca hay manzanas");
    break;

  default: //codigo q se ejecuta si nunguno es True
    console.log("no existe esta fruta");
    break;
}

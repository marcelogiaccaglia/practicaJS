/* ------------// EXPORTAR y REQUERIR // ----------- */

// Instalacion y requerir Libreria externa (npm install)
/* Se las debe instlar en consola npm i moment, luego requerirlas en la app */
let moment = require("moment");

console.log(moment().format("YYYY Do MMMM"));

/*Requerir Libreria Core*/
/* Son librerias ya instaladas en JS, solo se deben requerir */
let fs = require("fs");
const { dirname } = require("path");
let texto = fs.readFileSync(__dirname + "/texto.txt", "utf-8");

console.log(texto);

// Libreria Propia module.exports
/* Creamos un modulo de codigo, al final con module.exports = (varible) lo exportamos, por ultimo se lo requiere en el archivo q se quiera usar*/
let exportar = require("./moduleExport/exportar.js");
const { log } = require("console");

console.log(exportar);

/* ------------- //Exportar-Importar (metodo viejo) // ------------ */

/* Se crea un archivo el cual se va a modularizar, se selecciona el codigo a exportar */
export const PI = Math.PI;

/* Por ultimo se lo importa en el archivo a ser usado */
import { PI } from "./js/modulo.js";

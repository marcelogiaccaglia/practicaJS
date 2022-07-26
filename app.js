// Instalacion y requerir Libreria externa (npm install)
let moment = require("moment");

console.log(moment().format("YYYY Do MMMM"));

/*Requerir Libreria Core*/
let fs = require("fs");
const { dirname } = require("path");
let texto = fs.readFileSync(__dirname + "/texto.txt", "utf-8");

console.log(texto);

// Libreria Propia module.export
let exportar = require("./moduleExport/exportar.js");
const { log } = require("console");

console.log(exportar);

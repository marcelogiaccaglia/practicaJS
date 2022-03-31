// Instalacion y requerir Libreria externa (npm install)
let moment = require("moment");
console.log(moment().format("YYYY Do MMMM"));

/*Requerir Libreria Core*/
let fs = require("fs");
const { dirname } = require("path");
let texto = fs.readFileSync(__dirname + "/texto.txt", "utf-8" );
console.log(texto);

// Libreria Propia module.export
let exportar = require ("./moduleExport/export.js");
const { log } = require("console");
console.log(exportar);

/* Variables */
let string = "hola a todos"; // buenas practicas variables con nombres del mismo tipo de datos que el dato contenido//
let stringQuotes = "Daniel dijo \"Hey como estan\".";                         /*    Code	Output
                                                                                     \'	    single quote
                                                                                     \"	    double quote
                                                                                     \\	    backslash
                                                                                     \n	    newline
                                                                                     \r	    carriage return
                                                                                     \t	    tab
                                                                                     \b	    word boundary
                                                                                     \f	    form feed       */
let stringQuotes2 = 'Daniel dijo "Hey como estan"';
var numb = 37;
const BOLE = true;
console.log(string, stringQuotes, stringQuotes2, numb, BOLE);

//Tipo de datos//
let objetLit = {
    depto: 7,
    piso: 5,
    familia: "giaccaglia",
};

let array = [true, 23, "casa"];
console.log(objetLit.familia, array[2]);

//Datos especiales//
let nan;
     nan = nan + 2;
let nul = null;
let undefin;
    undefin = undefin + "hola";
console.log(nan, nul, undefin);

//Operadores//
    // asigancion = //
    //arismeticos//
let suma = 2 + 4;
let resta = 2 - 5;
let multi = 2 * 4;
let divi = 2 / 4;
let incrementa = 3; // ++
let decrementa = 2; // --
let resto = 15 % 2;
console.log (suma, resta, multi, divi, ++incrementa, --decrementa, resto);

    //comparacion simple//
let num1 = 42;
let num2 = "42";

let compSimple = num1 == num2;
let compSimpleF = num1 != num2;
let compEstric = num1 === num2;
let compEstricF = num1 !== num2;
let comp1 = num1 <= num2;
let comp2 = num1 >= num2;
console.log(compSimple, compSimpleF, compEstric, compEstricF, comp1, comp2);

//Logicos//
let respuesta;
if (24>20 && 40>5) {           //and  true+true = true//
      respuesta = "verdad";
};
console.log(respuesta);

if (24>20 || 20<3) {               //or false+true = true//
    console.log ("asi es OR");
};

if (!24<20) {
    console.log ("asi es NOT");     //not false = true//
};

//Concateneacion//
let texto1 = "hola";
let texto2 = "mundo";
let texto3 = "Hi"
let textoTotal = texto1 + " " + texto2;
texto3 += " mundo"; // tambien puede ser texto3 += texto2; //
console.log(textoTotal, texto3);

//Funciones//
function presentacion (texto1, texto2) {     //Declarada//
    return texto1 + " al " + texto2;
}

let presentation = function (texto1="hi", texto2="world") {   //Expresada//
    return texto1 + " a todo el " + texto2;
}
console.log(presentacion(), presentation());



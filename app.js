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
let fistPosition = stringQuotes2[1];
var numb = 37;
const BOLE = true;

console.log(string);
console.log(stringQuotes);
console.log(stringQuotes2);
console.log(numb);
console.log(BOLE);
console.log(fistPosition);

//Tipo de datos//
let objetLit = {
    depto: 7,
    piso: 5,
    familia: "giaccaglia",
};

let array = [true, 23, "casa"];

console.log(objetLit.familia);
console.log(array[2]);

//Datos especiales//
let nan;
     nan = nan + 2;
let nul = null;
let undefin;
    undefin = undefin + "hola";

console.log(nan);
console.log(nul);
console.log(undefin);

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

console.log (suma);
console.log (resta);
console.log (multi);
console.log (divi);
console.log (++incrementa);
console.log (--decrementa);
console.log (resto);

    //comparacion simple//
let num1 = 42;
let num2 = "42";

let compSimple = num1 == num2;
let compSimpleF = num1 != num2;
let compEstric = num1 === num2;
let compEstricF = num1 !== num2;
let comp1 = num1 <= num2;
let comp2 = num1 >= num2;

console.log(compSimple);
console.log(compSimpleF);
console.log(compEstric);
console.log(compEstricF);
console.log(comp1);
console.log(comp2);

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

console.log(textoTotal);
console.log(texto3);

//Funciones//
function presentacion (tex1, tex2) {     //Declarada//
    return tex1 + " al " + tex2;
}

let presentation = function (text1="hi", text2="world") {   //Expresada//
    return text1 + " a todo el " + text2;
}
console.log(presentacion("Hola", "Mundo"));
console.log(presentation("Hello", "Pais"));



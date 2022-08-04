/* -------  VARIABLES ---------- */
console.log("--VARIABLES--");

/* Las variables pueden contener cadenas de strings, arrays, objetos literales, numeros, booleanos 
----TODO ES UN OBJETO EN JS Y TODO OBJETO TIENE PROPIEDADES Y METODOS----
Los identificadores o nombres de una variable pueden inicia con letra, $, _, nunca con numero o otro caracter*/

/* snake_case - uso para nombre archivos (mi_archivo.js)
   UPPER_CASE - uso para constantes
   UpperCamelCase - uso para class
   lowerCamelCase - uso para Objetos, variables, funciones, instancias */

// buenas practicas variables con nombres del mismo tipo de datos que el dato contenido//

let string = "hola a todos";
console.log(string);

let stringQuotes = 'Daniel dijo "Hey como estan".';
/* ---     Code Output
      \'	    single quote
      \"	    double quote
      \\	    backslash
      \n	    newline
      \r	    carriage return
      \t	    tab
      \b	    word boundary
      \f	    form feed       --- */
console.log(stringQuotes);

/* de esta forma podemos colocarle doble comillas a un string */
let stringQuotes2 = 'Daniel dijo "Hey como estan"';
console.log(stringQuotes2);

/* Un string es un array de caracteres por lo que podemos conocer o extraer la posicion de cada caracter del mismo */

let fistPosition = stringQuotes2[1];
console.log(fistPosition);

/* Constructor de un String */

let constructor = new String("Hola");
console.log(constructor);

/* Esta forma de usar el valor de una variable se denomina interpolacion */

let interpolacion = "Marcelo";
console.log(
  `Hola ${interpolacion}`
); /* Se deben usar si o si las comillas invertidas ` ` */

let interpolacion2 = "Giaccaglia";
let saludo = `Hola mi apellido es ${interpolacion2} `;
console.log(saludo);

var numb = [38, 3.5]; /* no se debe ni se usa mas var */
console.log(numb);

/* ---- Metodos de Numeros ----- */ /* Estudiar los existentes en Mozilla Dev */
console.log("--Metodos de Numeros--");

let constructorNumb = new Number(23);
console.log(constructorNumb);

let numb3 = 3.55;

console.log(numb3.toFixed(1));
console.log(parseInt(numb3));

let numb2 = "23";
console.log(parseInt(numb2)); // para convertir un numero string en number

/* ----------------------------------------------------------------- */

/* Booleano */ /* Existen Valores que ya por si solo valen True o False, ver documentacion en Mozilla Dev */

let boole = Boolean(true);
console.log(boole);

const BOLE = true; /*  Es buena practica que las const se le asignen nombres en UPPER_CASE */
console.log(
  BOLE
); /* No se podra modificar nunca su valor para datos primitivos */

/* Para datos compuestos si se le puede modificar su contenido a una constante */
const CAMBIO = {
  nombre: "Marcelo",
  edad: 38,
};
CAMBIO.apellido =
  "Giaccaglia"; /* Forma de agregar un valor a un Objeto Literal */
console.log(CAMBIO);

/* Para conocer el tipo de dato que contiene una variable */
console.log(typeof BOLE);
console.log(typeof numb);

/* // ----- Concateneacion ------ // */ console.log("--Concateneacion--");

let texto1 = "hola";
let texto2 = "mundo";
let texto3 = "Hi";

let textoTotal = texto1 + " " + texto2;
texto3 += " mundo"; // tambien puede ser texto3 += texto2; //

console.log(textoTotal);
console.log(texto3);

let arr1 = ["Que", "bello", "es", "el"];
let union = [
  ...arr1,
  texto2,
]; /* Usando el Spread Operator para concatenar un array */
console.log(union);

/* // -------- TIPO DE DATOS ---------// */ console.log("--TIPO DE DATOS--");

/* Los objetos estas compuestos de propiedades "clave : valor" o de metodos que 
  son funciones dentro de un objeto (Ver archivo Objeto Literal)*/

let objetLit = {
  depto: 7,
  piso: 5,
  familia: "giaccaglia",
  metodo: function (a = 2, b = 4) {
    return a + b;
  },
};
console.log(
  objetLit.familia
); /* Usando el Dot Notation accedemos a las propiedades del objeto literal */
console.log(
  objetLit.metodo()
); /* Con el Dot Not podemos acceder a un metodo y el mismo lo ejecutamos con () */

let array = [true, 23, "casa"];
console.log(
  array[2]
); /*De esta forma podemos acceder a la posicion de un valor del array */

/* // ----- Datos especiales -----// */ console.log("--Datos especiales--");

let nan;
nan = nan + 2;
console.log(nan);

let nul = null;
console.log(nul); // Vacia intencionalemente por el desarrollador

let undefin;
console.log(undefin); //Vacia por default

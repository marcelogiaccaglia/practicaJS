
/* -------  VARIABLES ---------- */
/* Las variables pueden contener cadenas de strings, arrays, objetos literales, numeros, booleanos 
Los identificadores o nombres de una variable pueden inicia con letra, $, _, nunca con numero o otro caracter*/

/* snake_case - uso para nombre archivos (mi_archivo.js)
   UPPER_CASE - uso para constantes
   UpperCamelCase - uso para class
   lowerCamelCase - uso para Objetos, variables, funciones, instancias */

let string = "hola a todos"; // buenas practicas variables con nombres del mismo tipo de datos que el dato contenido//
console.log(string);


let stringQuotes = "Daniel dijo \"Hey como estan\".";       /* ---     Code Output
                                                                \'	    single quote
                                                                \"	    double quote
                                                                \\	    backslash
                                                                \n	    newline
                                                                \r	    carriage return
                                                                \t	    tab
                                                                \b	    word boundary
                                                                \f	    form feed       --- */
console.log(stringQuotes);


let stringQuotes2 = 'Daniel dijo "Hey como estan"'; /* de esta forma podemos colocarle doble comillas a un string */
console.log(stringQuotes2);


let fistPosition = stringQuotes2[1]; /* Un string es un array de caracteres por lo que podemos conocer o extraer la posicion de cada caracter del mismo */
console.log(fistPosition);

let interpolacion = "Marcelo"; /* Esta forma de usar el valor de una variable se denomina interpolacion */
console.log(`Hola ${nombre}`); /* Se deben usar si o si las comillas inclinadas ` ` */


var numb = [38, 3.5]; /* no se debe ni se usa mas var */
console.log(numb);


const BOLE = true; /*  Es buena practica que las const se le asignen nombres en UPPER_CASE */
console.log(BOLE);  /* No se podra modificar nunca su valor para datos primitivos */


const CAMBIO = {
    nombre: "Marcelo", /* Para datos compuestos si se le puede modificar su contenido a una constante */
    edad: 38
};
CAMBIO.apellido = "Giaccaglia"; /* Forma de agregar un valor a un Objeto Literal */
console.log(CAMBIO);

// ----- Concateneacion ------ //

let texto1 = "hola";
let texto2 = "mundo";
let texto3 = "Hi"

let textoTotal = texto1 + " " + texto2;
texto3 += " mundo"; // tambien puede ser texto3 += texto2; //

console.log(textoTotal);
console.log(texto3);

let arr1 = ["Que", "bello", "es", "el"];
let union = [...arr1, texto2];  /* Usando el Spread Operator para concatenar un array */
console.log (union);


// -------- TIPO DE DATOS ---------//


let objetLit = {   /* Los objetos estas compuestos de propiedades "clave : valor" o de metodos que 
                       son funciones dentro de un objeto */
    depto: 7,
    piso: 5,
    familia: "giaccaglia",
    metodo: function (a=2, b=4){
        return a + b;
    }
};
console.log(objetLit.familia); /* Usando el Dot Notation accedemos a las propiedades del objeto literal */
console.log(objetLit.metodo()); /* Con el Dot Not podemos acceder a un metodo y el mismo lo ejecutamos con () */


let array = [true, 23, "casa"];
console.log(array[2]);   /* De esta forma podemos acceder a la posicion de un valor del array */


// ----- Datos especiales -----//

let nan;
     nan = nan + 2;
console.log(nan);


let nul = null;
console.log(nul);


let undefin;
console.log(undefin);
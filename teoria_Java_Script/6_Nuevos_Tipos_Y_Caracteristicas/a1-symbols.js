/* ------------- SYMBOLS ---------------- */

/* Nuevo tipo de dato primitivo de JS, su caracteristica es que trabaja como un identificador de propiedades de objetos privados, el mismo es una buena practica crearlo como una constante */

/* para crear un symbol no es necesario el uso de la palabra new como constructor */
let id1 = Symbol("id"); //Dentro del () se puede colocar num o string
let id2 = Symbol("id"); //Sirven para darle un identificador unico

console.log(id1 === id2); //false (su contenido se transforma en un identificador unico)
console.log(id1, id2); // Symbol(id) Symbol(id)
console.log(typeof id1, typeof id2); // symbol symbol

/* Si quisieramos tener informacion privada dentro de un Objeto el cual se enviara por una API, se utiliza este tipo de dato */

const NOMBRE = Symbol();
const SALUDAR = Symbol();

let persona = {
  /* Para asignarle informacion a un Symbol debemos usar los [] */
  [NOMBRE]: "Marcelo",
};

console.log(persona);
//{ [Symbol()]: 'Marcelo' } (De esta manera se conoce el valor pero no su clave o prop.)

persona.NOMBRE = "Nicolas";
console.log(persona);
//{ NOMBRE: 'Nicolas', [Symbol()]: 'Marcelo' } (Nadie puede pisar el valo privado)

console.log(persona.NOMBRE); //Nicolas
console.log(persona[NOMBRE]); //Marcelo

persona[SALUDAR] = function () {
  console.log("Hola Marcelo Nicolas");
};

console.log(persona); //se veran dos propiedades symbol
persona[SALUDAR](); //Hola Marcelo Nicolas (forma de ejecutar un metodo symbol)

console.log(Object.getOwnPropertySymbols(persona)); //sirve para listar los symbols

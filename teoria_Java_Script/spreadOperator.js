/* ------------ // SPREAD OPERATOR // ------------ */

/* Nos permite expandir cada uno de los datos de un elemento iterable dentro de otro elemento, y estos elementos iterables pueden ser un Objeto, Array o String */

//Uso en Arrays

let clubUno = ["Boca", "River", "Racing"];
let clubDos = ["San Lorenzo", "Lanus", "Gimnasia"];

let todosLosClub = [...clubUno, ...clubDos];

console.log(todosLosClub);

//Uso en Objetos

let auto = {
  marca: "Ferrari",
  km: 0,
  anio: 2022,
};

let corredorUno = {
  nombre: "Vettel",
  edad: 32,
  ...auto,
};

console.log(corredorUno);

//Uso en Funciones (sirve para recibir "n" cantidad de parametros)

function mensaje(...palabras) {
  console.log(palabras);
}
mensaje("Hola", "Programadores", "Mundiales");

/* ----- Rest Parameter ---- */

//Sirve para capturar parametros adicionales o de mas que se le envian a una funcion

function miFuncion(param1, param2, ...paramOtros) {
  console.log(paramOtros);
}

miFuncion("a", "b", "c", "d", "e");

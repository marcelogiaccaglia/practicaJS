/* --------------// EXPRESIONES REGULARES // ----------- */

/* Es una secuencia de caracteres que conforman una busqueda especifica */
/* Utilizadas para validar informacion solicitada (ej: mail, contraseñas, etc.) */
/* Buscar mas informacion en MDN Mozilla Dev */

let cadena =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias nobis saepe provident tempore, asperiores voluptas 12 maiores quam autem dolorembus amet numquam qui nemo illo obcaecati corporis aliquam maxime ratione.";

/* Primera forma del uso de Exp Regul.con constructor, poco usada. */
let expReg1 = new RegExp("lorem", "ig"); //1° param busqueda, 2° param bandera (exp regul)
console.log(expReg1.test(cadena)); // valida True o False
console.log(expReg1.exec(cadena)); //entrega array con Obj lit con coincidencias

/* Segunda forma del uso de Exp Regul., la mas usada */
let expReg2 = /lorem/gi; //Entre barras la busqueda, fuera la bandera (exp regul)
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

/* En este caso se busca un numero y en banderas i= ignora mayusculas, g=global */
let expReg3 = /\d/gi;
console.log(expReg3.test(cadena));
console.log(expReg3.exec(cadena));

/* Caso de busqueda de numero especifico */
let expReg4 = /[0-9]/gi;
console.log(expReg3.test(cadena));
console.log(expReg3.exec(cadena));

/* Caso de cantidad de posibles repeticiones de la busqueda */
let expReg5 = /lorem{1,2}/gi; //posibles repeticiones 1 a 2
console.log(expReg5.test(cadena));
console.log(expReg5.exec(cadena));

/* Caso de cantidad de repeticiones de la busqueda con inicio alto */
let expReg6 = /lorem{3}/gi; //repeticiones 3
console.log(expReg6.test(cadena));
console.log(expReg6.exec(cadena));

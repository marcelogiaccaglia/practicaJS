/* ----------------- // DESTRUCTURING // -------------- */

/* ------- Destructuring de Arrays -------- */
console.log("--Destructuring de Arrays--");

//Desestructura un array y permite extraer sus elementos y luego incorporarlos a una variable a crear, No modifica el array original

let colores = ["rojo", "amarillo", "verde"];

//Forma para desestructurar, el nombre entre corchetes sera el nombre de la nueva variable que contendra el valor de esa posicion, en caso de no existir esa posicion sera Undefined
let [colorRojo, colorAmarillo, colorVerde] = colores;

// Respeta las posiciones para asignar los valores

console.log(colorRojo);
console.log(colorAmarillo);
console.log(colorVerde);

/* ------- Destructuring de Objetos Literales -------- */
console.log("--Destructuring de Objetos Literales--");

//Desestructura un Objeto y extrae el valor de los elementos indicados y lo incorpora en una variable con el nombre q indiquemos, No modifica el Objeto original

let persona = {
  nombre: "Laura",
  edad: 31,
  faltas: 3,
};

//Forma para desestucturar, entre llaves debe colocarse el nombre de la clave o propiedad del objeto a extraer, este luego sera el nombre de la nueva variable que se crea por el destructuring
let { nombre, edad } = persona;

console.log(nombre);
console.log(edad);
// si la propiedad que indicamos no existe obtendremos undefined

//si queremos cambiar el nombre de la nueva variable para evitar que sea la misma que la propiedad del objeto, se debe hacer
let { faltas: totalFaltas } = persona;
console.log(totalFaltas);

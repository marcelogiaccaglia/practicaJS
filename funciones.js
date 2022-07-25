/* ------- //FUNCIONES// --------- */

/* Las funciones estan compuestas por un nombre, los parametros denominados argumentos, pudiendo no tener argumentos, y una ejecucion entre llaves */

function presentacion(tex1, tex2) {
  //Se denomina Declarada cuando se le da un nombre a la funcion//
  return tex1 + " al " + tex2;
}
console.log(presentacion("Hola", "Mundo"));

let presentation = function (text1 = "hi", text2 = "world") {
  //Expresada es cuando esta dentro de una variable//
  return (
    text1 + " a todo el " + text2
  ); /* Se pueden indicar argumentos como default */
};
console.log(presentation()); /* Una funcion se la invoca con su nombre y () */

let num1 = 12; /* Una variable fuera de una funcion es denominada Scope Global ya que puese usarse everywhere */

function crear(num1, num2) {
  let num3 = num1 + num2;
  return num3; /*  Una variables dentro de una funcion es Scope local, solo puede usarse en 
                                   la funcion expresada*/
}
console.log(crear(num1, 3));

/* ---- // ARROW FUNCTION // ---- */

/* Tiene una sintaxis mas compacta y siempre tiene q estar declarada dentro de una variable */

let sumar = (a, b) => {
  return a + b;
}; /* sintaxis principal */
console.log(sumar(3, 7));

let restar = () =>
  3 -
  7; /* En el caso de no existir argumento van vacias (), una sola linea de codigo 
                                pude presindir de return y de las llaves, caso contrario debe usarse */
console.log(restar());

let mult = (num) =>
  num * 3; /* Si se dispone de un solo argumento se pueden NO usar () */
console.log(mult(11));

/* ------ // CALLBACK // ------- */

/* Es una funcion que se pasa como parametro de otra funcion */

/* Anonimos: es una funcion que no posee nombre y al no poder llamarla es necesario escribila dentro de la funcion que recibe el callback */

/* Definidas: es una funcion definida previamente que se pasa como Callback y al momento de pasarla como argumento nos referimos a la misma por su nombre */

let nombreCompleto = (nombre, apellido) => {
  return nombre + " " + apellido;
}; //Callback-1
let iniciales = (nombre, apellido) => {
  return nombre[0] + " " + apellido[0];
}; //Callback-2

function saludar(nombre, apellido, callback) {
  //El argumento callback se estila usar un
  return "Hola " + callback(nombre, apellido); // nombre generico para poder utilizar
} // diferentes callbacks sobre la misma

console.log(saludar("Juanito", "Sanchez", nombreCompleto));
console.log(saludar("Juanito", "Sanchez", iniciales));

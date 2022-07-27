/* ------- //FUNCIONES// --------- */

/* Las funciones estan compuestas por un nombre, los parametros denominados argumentos, pudiendo no tener argumentos, y una ejecucion entre llaves */

/* Se denomina Declarada cuando se le da un nombre a la funcion */ /* No son las mas recomendadas en su uso por que realizan un movimiento dinamico, elevandolas y esto genera que se pueden invocar antes o despues de inicializarlas */
console.log("--FUNCIONES--");

function presentacion(tex1, tex2) {
  return tex1 + " al " + tex2;
}
console.log(presentacion("Hola", "Mundo"));

//Expresada es cuando esta dentro de una variable// /* No se pueden invocar antes de su inicializacion, evita errores de compilacion y son las mas recomendables * /

/* Se pueden indicar argumentos como default */

let presentation = function (text1 = "hi", text2 = "world") {
  return text1 + " a todo el " + text2;
};
console.log(presentation()); /* Una funcion se la invoca con su nombre y () */

/* Una variable fuera de una funcion es denominada Scope Global ya que puese usarse everywhere */

let num1 = 12;

/*  Una variables dentro de una funcion es Scope local, solo puede usarse en 
la funcion expresada*/

function crear(num1, num2) {
  let num3 = num1 + num2;
  return num3; //Todo lo que sigue luego de un return no es ejecutado
}
console.log(crear(num1, 3));

/* ---- // ARROW FUNCTION // ---- */
console.log("--ARROW FUNCTION--");

/* Tiene una sintaxis mas compacta y siempre tiene q estar declarada dentro de una variable */

/* sintaxis principal */

let sumar = (a, b) => {
  return a + b;
};
console.log(sumar(3, 7));

/* En el caso de no existir argumento van vacias (), una sola linea de codigo 
  pude presindir de return y de las llaves, caso contrario debe usarse */

let restar = () => 3 - 7;
console.log(restar());

/* Si se dispone de un solo argumento se pueden NO usar () */

let mult = (num) => num * 3;
console.log(mult(11));

/* ------ // CALLBACK // ------- */
console.log("--CALLBACK--");

/* Es una funcion que se pasa como parametro de otra funcion */

/* Anonimos: es una funcion que no posee nombre y al no poder llamarla es necesario escribila dentro de la funcion que recibe el callback */

/* Definidas: es una funcion definida previamente que se pasa como Callback y al momento de pasarla como argumento nos referimos a la misma por su nombre */

//Callback-1
let nombreCompleto = (nombre, apellido) => {
  return nombre + " " + apellido;
};
//Callback-2
let iniciales = (nombre, apellido) => {
  return nombre[0] + " " + apellido[0];
};

/* El argumento callback se estila usar un nombre generico para poder utilizar diferentes callbacks sobre la misma */

function saludar(nombre, apellido, callback) {
  return "Hola " + callback(nombre, apellido);
}

console.log(saludar("Juanito", "Sanchez", nombreCompleto));
console.log(saludar("Juanito", "Sanchez", iniciales));

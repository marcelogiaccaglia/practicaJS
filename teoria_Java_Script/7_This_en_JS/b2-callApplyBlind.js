/* --------------- CALL - APPLY - BIND ----------------- */

/* Estos 3 metodos trabajan junto con el this, estos nos permiten conservar la referencia del scoope en el que se encuentra para luego invocarlo */

this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
} //Creamos una funcion la cual utiliza un this que para este caso sera del contexto global/windows

saludar("hola", "Marcelo");

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj, "Hola", "Nicolas");
/* Con este metodo Call podemos utilizar la misma funcion saludar y al this asignarle a que scoope aplicar */

saludar.apply(obj, ["Chau", "Giaccaglia"]);
/* Apply es muy parecido a Call pero la diferencia es como asignarle los parametros a la funcion*/

/* Para el metodo Bind, este genera un enlace con el contexto en el que se encuentra el this */
const persona = {
  nombre: "Marcelo",
  saludar: function () {
    console.log(`hola ${this.nombre}`);
  },
};

persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(persona),
};
/* al utilizar el metodo bind sobre el metodo saludar de un nuevo objeto, dicho metodo del objeto utilizara el scoope de la funcion enlasada */

otraPersona.saludar();

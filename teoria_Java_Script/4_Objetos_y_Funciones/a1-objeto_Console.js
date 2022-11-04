/* -------------- // OBJETO CONSOLE // -------------- */

/* Console es un Objeto de JS con Metodos y Propiedades */

/* Metodos */

console.error("Estos es un error"); //Envia un mensaje de error a la consola

console.warn("Esto es un aviso"); //Envia un mensajede aviso a la consola

console.info("Soy un mensaje de informacion"); //Envia informacion

console.log("Registra lo sucedido en la app");

//Comodines en el uso del log
let nombre = "marcelo";
edad = 38;
console.log(`Mi nombre es ${nombre} y mi edad ${edad}`);
console.log(`Mi nombre es %s y mi edad %d`, nombre, edad); // %s string, %d digito

console.clear(); // borrar el historial de la consola

/* console.dir(document); */ // para transformar o parsear a objetos

console.group("Cursos JS"); //Para crear un mensaje listado
console.log("Curso 1");
console.log("Curso 2");
console.groupEnd();

console.table(Object.entries(console)); //Mensaje dentro de una tabla

//-------------------------

console.time("Mi modulo demora "); //Para conocer el tiempo de ejecucion de un modulo

let arr = Array(300);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
}

console.timeEnd("Mi modulo demora ");

// -----------------------

for (let i = 0; i < 9; i++) {
  console.count("Posicion codigo For ");
  const element = i;
}

//console.assert() para realizar testing

/* -------------  ASYNC / AWAIT -------------- */

/* Esta forma de trabajo de las solicitudes y respuestas externas es una mezcla entre Promise con esta nueva funcion

La misma utiliza el resolve y el reject de la funcion de Promise y luego se utilizara la funcion try - catch*/

function cuadradoPromise(value) {
  /* Se crea una funcion donde lo primero es utilizar un condicional que atrape el error con reject del Objeto Promise para el caso de el parametro sea False */
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }
  /* Luego crear una respuesta para el caso de un parametro TRUE donde se utilizara el callback de resolve*/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

/* Luego se remplaza el .then() y el .catch() por el uso del try y catch, la funcion creada para el caso de que sea declarada se le debera colocar la palabra async adelante de function para combertirla en asincronica  */
async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");
    /* creamos una variable la cual ejecutara la funcion principal con un valor asignado, pero se debera utilizar el metodo await adelante de la ejecucion, ya que con esto indicamos que hasta no recibir una respuesta de dicha funcion no seguir el flujo o hilo del codigo */
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("3");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    /* Para este caso el valor entregado como parametro es FALSE por lo que se ejecuta el callback de reject para que lo atrape el catch y nos imprima el error */
    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

/* Para funciones expresadas la parabra async debera estar delandte de los () de la arrow function */
const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("9");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada();

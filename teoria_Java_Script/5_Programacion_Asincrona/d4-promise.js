/* -------------- PROMISE ------------------ */

/* Las promesas son otro de los metodos que se utilizan para el control del asincronismo a la espera de resultados cuando se realizan pedidos externos.
Las promesas estan compuestas de parametros como "resolve" y "reject" dependiendo de la respuesta del pedido externo, dicha respuesta la podremos atajar con el metodo .then() para respuestas True y .catch() para respuestas False */

/* Las promesas son una evolucion de las callback, y lo que diferencia de ellas es su orden y su forma de atrapar los errores, ya que con un solo bloque de codigo que atrape el error, esta lo hara para todo el bloque completo siempre que sea del mismo scope. Si el error se da en cualquier .then() el .catch() se activa */

function cuadradoPromise(value) {
  /* Creamos la condicion de error para que sea atajada con catch() */
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }
  /* Creamos una funcion constructora que creara un objeto literal */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

/* Cuando ejecutamos una funcion y la respuesta es TRUE, .then() se ejecuta llamando al callback de la funcion constructora resolve. Por ultimo con return se ejecuta nuevamente la funcion*/
cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  /* Si nuevamente la respuesta es TRUE se ejecutara el .then() que llamara a resolve */
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("3");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  /* Ya en este caso al ejecutarse el return la respuesta externa es FALSE por lo que se ejecuta el .catch() definido al final del codigo */
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  /* Al ejecutrase el .catch() esta ejecutara un callback que es el metodo reject el cual imprime un mensaje del error */
  .catch((err) => console.error(err));

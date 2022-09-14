/* ---------------- CALLBACK --------------- */

/* Son funciones anonimas que pueden ser autoejecutables o pasadas como un parametro de otra funcion, las mismas sirven para controlar la asincronia del flujo */

/* Para el siguiente ejemplo utilizaremos como parametros un valor y le pasaremos una funcion anonima que se autojecutara dentro de la funcion q la invoca */

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(
      value,
      value * value
    ); /* en este punto se auto ejecuta el callback */
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  /* result sera el resultado de value*value */
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin Callback");
            console.log("Callback Hell !!!!!😈🤘");
            console.log("http://callbackhell.com/");
          });
        });
      });
    });
  });
});

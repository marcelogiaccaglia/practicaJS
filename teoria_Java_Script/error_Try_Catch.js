/* -----------------// MANEJO DE ERRORES CON TRY - CATCH // ----------- */

/* Es una forma de poder capturar posibles errores de codigo, para luego enviar mensajes personales o trabajar con ese error capturado */

let esNumero = "try";
let multiplicar;
let mensjError;

try {
  if (isNaN(esNumero)) {
    throw new Error("No es un number");
  }
  multiplicar = esNumero * 12;
} catch (error) {
  mensjError = `La funcion infoma el siguiente error ${error}`;
}

console.log(
  `El resultado es ${multiplicar} por que existe el siguiente error: ${mensjError}`
);

/* Existe el uso de la ultima parte llamada Finally, que no es muy utilizada, esta siempre se ejecuta, aun si se ejecuta el try o el catch */

try {
} catch (error) {
} finally {
}

/*  */

console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin); /* La ruta de la cual se origina */
console.log(location.protocol); /* protocolo como http */
console.log(location.host); /* nombre el dominio */
console.log(location.hostname);
console.log(location.port);
console.log(location.href); /* Toda la URL */
console.log(location.hash); /* Valores despues del # */
console.log(location.search); /* envio de params */
console.log(location.pathname); /* Archivo a consultar */
//location.reload();/* para recargar la pagina */

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length); /* indica cantidad de paginas visitado */
//history.forward(1);/* Metodo hacia adelante */
//history.go(-3);/* puede ir hacia atras o adelante */
//history.back(2);/* Metodo hacia atras */

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection); /* nos da info de coneccion por ejemplo 4g */
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes); /* formatos aceptados por el navegadro */
console.log(
  navigator.onLine
); /* para saber si la coneccion se perdio o la recupero */
console.log(
  navigator.serviceWorker
); /* api para converitir una web en una app instalable */
console.log(navigator.storage); /* api de almacenamiento */
console.log(navigator.usb); /* para detectar dispositivos usb */
console.log(navigator.userAgent); /* informacion del sistema conectado */

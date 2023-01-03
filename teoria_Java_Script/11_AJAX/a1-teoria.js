/* -------------- AJAX (Asynchronous JavaScript & XLM) -------------------- */

/* AJAX es un mecanismo de JS que es utilizado para realizar pedidos al servido en forma asincronica, este es un intemediario entre el usuario y el servidor y usa la asincronia para evitar recargar la pagina por cada peticion, la misma puede recibir informacion tipo JSON o HTML (JSON es el mas utilizado) */

/* Para programar AJAX utilizamos su Metodo Fetch-API (esta es la forma moderna), tambien sobre AJAX se puede utilizar una libreria llamada AXIOS (JQuery era utilizada como libreria para AJAX pero ya casi esta en desuso) */

/* AJAX no es una tecnologia en si, si no es un conjunto de tecnologias independientes que se unen
- HTML y CSS para crear una presentacion basada en estandares
- DOM para la interaccion y manipulacion dinamica de la presentacion
- HTML, XML, JSON para el intercambio y manipulacion de infomacion
- XMLHttpRequest o Fetch para el intercambio asincronico de informacion
- JS para unir todas las tecnologias */

/* AJAX trabaja con estados de peticion----

- Ready-State-Uninitialized = 0 (Se inicia peticion)
- Ready-State-Loading = 1 (Se envian los datos de peticion al servidor)
- Ready-State-Loaded = 2 (El sevidor responido al cliente pero no esta lista la info)
- Ready-State-Interactive = 3 (Js tiene acceso a los datos enviados por el servidor)
- Ready-State-Complete = 4 (Datos enviados al cliente)*/

/* Con cada respuesta del servidor obtendremos codigos de peticion del protocolo HTTP

- Informacion (100 - 199)
- Satifactorio (200 - 299)
- Redireccion (300 - 399)
- Error Cliente (400 - 499)
- Error Servidor (500 - 599)*/

/* Añadir JSON Formatter en Chrome para ver JSON en formato real */

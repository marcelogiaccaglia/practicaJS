/* ----------- ALERT - CONFIRM - PROPMT ------------ */

//Para que el objeto Windows nos de una aleta donde solo podemos aceptar

/* Utilizar framework sweet alert para alertas con estilos */

let alerta = window.alert("Hola soy una alerta");
// es lo mismo - alert("");

console.log(alerta);

//Para que el objeto Windows nos pida una confirmacion donde se puede aceptar o no

let confirmar = confirm("Por favor confima");
// es lo mismo - window.confim("");

console.log(confirmar);

//Para que el objeto Windows nos pida teclear un dato

let aviso = prompt("Por favor inserte la clave");
// es lo mismo - window.prompt("");

console.log(aviso);

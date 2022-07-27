/* ---------- // METODOS STRING // ---------- */

/* Un string es un array de caractes, donde dependiendo de la posicion que inician en 0, se puede conocer el carater que esta en esa posicion */

let nombre = "Marcelo Giaccaglia";

/* Propiedad  */ console.log("--LENGTH--");

console.log(nombre.length); // Cuenta los espacios en blanco tambien

//Metodos

console.log("--INDEXOF()--");
/* Sobre los corches debe colocarse un parametro como caracter o palabra a buscar, devuelve posicion del incio de la palabra o del caracter */
console.log(nombre.indexOf("Giaccaglia"));

console.log("--SLICE()--");
/* En los parametros se debe coloca la posicion del inicio y final del corte, entrega esa parte del string cortado y puede recibir numeros negativos */
console.log(nombre.slice(0, 7));

console.log("--TRIM--");
/* Elimina espacios al principio y final del string, nunca internos a la 
cadena de texto */
console.log(nombre.trim);

console.log("--SPLIT()--");
/* Se debe enviar como parametro un separador, devuelve un array con partes del string original */
console.log(nombre.split("."));

console.log("--REPLACE()--");
/* Se debe enviar como parametros un primer string a buscar y luego un string a remplazar, devuelve un string nuevo */
console.log(nombre.replace("Marcelo", "Nicolas"));

/* ---------- // METODOS STRING // ---------- */

/* Un string es un array de caractes, donde dependiendo de la posicion que inician en 0, se puede conocer el carater que esta en esa posicion */

let nombre = "Marcelo Giaccaglia";

//Propiedad

console.log(nombre.length); // Cuenta los espacios en blanco tambien

//Metodos

console.log(nombre.indexOf("Giaccaglia"));
/* Sobre los corches debe colocarse un parametro como caracter o palabra a buscar, devuelve posicion del incio de la palabra o del caracter */

console.log(nombre.slice(0, 7));
/* En los parametros se debe coloca la posicion del inicio y final del corte, entrega esa parte del string cortado y puede recibir numeros negativos */

console.log(nombre.trim);
/* Elimina espacios al principio y final del string, nunca internos a la cadena de texto */

console.log(nombre.split("."));
/* Se debe enviar como parametro un separador, devuelve un array con partes del string original */

console.log(nombre.replace("Marcelo", "Nicolas"));
/* Se debe enviar como parametros un primer string a buscar y luego un string a remplazar, devuelve un string nuevo */

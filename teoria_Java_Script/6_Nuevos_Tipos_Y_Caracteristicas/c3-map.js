/* -------------- MAP ------------------ */

/* Es un tipo de dato "Complejo" parecido a un objeto literal primitivo, ya que posee propiedades clave valor, pero en el caso de la clave esta puede ser un string un number, un null, un true/false, aunque solo se aconseja uso de string y number. Tambien sus propiedades estan dentro de una posicion como objeto iterable y se utiliza el get y el set para su modificacion */

let mapa = new Map();

mapa.set("nombre", "Marcelo");
mapa.set("apellido", "Giaccaglia");
mapa.set("edad", 38);

console.log(mapa);
/* // Map(3) {
  'nombre' => 'Marcelo',
  'apellido' => 'Giaccaglia',
  'edad' => 38
}  Se obtiene un objeto pero con caracteristicas diferentes*/

console.log(mapa.size); //3 para conocer la longitud
console.log(mapa.has("edad")); // true - para saber si existe
console.log(mapa.get("nombre")); //"Marcelo" para concer el valor
mapa.set("nombre", "Marcelo Nicolas"); /* pisar un valor */
console.log(mapa);
mapa.delete("apellido"); //elimina clave y valor
console.log(mapa);

/* Recorrer un MAP */ console.log("Recorrer un MAP con for of");

for (let [key, value] of mapa) {
  //usando el destucturador
  console.log(`Llave: ${key}, Valor: ${value}`);
}

/* Otra forma de crear un MAP */ console.log("Creando un MAP");

/* Se debe tener en cuenta que es como crear un array dentro de un objeto y se utilizan los [] para la creacion de las llaves valor */
const mapa2 = new Map([
  ["nombre", "Soledad"],
  ["apellido", "Porras"],
]);

console.log(mapa2);

/* Separando en diferentes variables las claves y en otra los valores */

let clave = [...mapa2.keys()];
let valor = [...mapa2.values()];

console.log(clave);
console.log(valor);

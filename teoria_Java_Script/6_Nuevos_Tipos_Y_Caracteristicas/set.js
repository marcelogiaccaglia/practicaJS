/* ----------------- SET ---------------- */

/* Tipo de dato "Complejo" que pemite crear un array de valores unicos, siempre hablando de valores primitivos, ya que si uno de los valores fuera un objeto, los objetos en JS tienen caracteristicas de ser unicos */

const set = new Set([1, 2, 2, 3, 4, true, true, false, {}, {}, "hola", "HOLA"]);

console.log(set); //Set(10) { 1, 2, 3, 4, true, false, {}, {}, 'hola', 'HOLA' }
//repetidos los borra, JS es keysensitive o sea son diferentes los string con mayuscula
console.log(set.size); //funciona como el length

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(2);
set2.add(true);
set2.add(true);

console.log(set2);

/* Recorriendo un SET */ console.log("Recorriendo a SET con for of");

for (item of set) {
  console.log(item);
}

/* Recorriendo un SET */ console.log("Recorriendo a SET con for each");

set2.forEach((item) => {
  console.log(item);
});

/* Convirtiendo un SET en un Array */ console.log("Conviertiendo SET en Array");

let arr = Array.from(set);
/* Con la propiedad from del objeto Array, convertimos un set para conocer las posiciones de los elementos que contiene, esta se debe convetir en una variable */

console.log(arr);
console.log(arr[2]);

/* Se puede eliminar un elemento, existencia de o limpiar todo un SET */

set.delete("HOLA");
console.log(set); //borra

console.log(set.has("hola")); //true

set2.clear();
console.log(set2); //deja vacio a set2

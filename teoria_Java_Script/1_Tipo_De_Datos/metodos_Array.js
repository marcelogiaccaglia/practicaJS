/* ------------ ARRAYS ------------- */

let a = [1, "a", true, [1, 2, 4]];
console.log(a[1]);
console.log(a[3][2]); //para llamar a los datos de una array dentro de otro

let arr = new Array(); //propiedad constructora

let ar = Array(50).fill("dato"); //propiedad que crea 50 elementos y le asigna valores
console.log(ar);

/* ------------ // METODOS ARRAY // ------------ */

let arr1 = ["Marcelo", "Soledad", "Geovanna", "Susana", "Daniel", "Cristian"];

console.log("--.SPREAD OPERATOR--"); //Spread Operator para arrays
let arr2 = [...arr1, "Oscar", "Elena"];
console.log(arr2);

console.log("--.LENGTH--"); //.LENGTH --
//Recorrer un array y conocer la cantidad o longitud de elementos dentro
let arrLength = arr1.length;
console.log(arrLength);

console.log("--.PUSH()--"); //.PUSH() --
//Agrega un nuevo valor al final del array, y devuelve la nueva longitud (1 o mas parametros a insertar)
let arrPush = arr2.push("PUSH");
console.log(arr2);
console.log(arrPush);

console.log("--.POP()--"); //.POP() --
//Elimina el ultimo valor del array original y lo captura (no se le coloca parametro)
let arrPop = arr2.pop();
console.log(arr2);
console.log(arrPop);

console.log("--.UNSHIFT()--"); //.UNSHIFT() --
//Agrega un parametro al principio y retorna la nueva longitud (1 o mas parametros a insertar)
let arrUnshift = arr2.unshift("UNSHIFT");
console.log(arr2);
console.log(arrUnshift);

console.log("--.SHIFT()--"); //.SHIFT() --
//Elimina el primer elemento y lo captura (no se coloca parametro)
let arrShift = arr2.shift();
console.log(arr2);
console.log(arrShift);

console.log("--.JOIN()--"); //.JOIN() --
//Une todo los valores del array con un string "-" o en default "," (se le envia o no un string)
let arrJoin = arr1.join("-JOIN-");
console.log(arrJoin);

console.log("--.INDEXOF()--"); //.INDEXOF() --
//Busca un elemento y entrega su posicion (se debe colocar elemento a buscar)
let arrIndexof = arr1.indexOf("Cristian");
let arrIndexOf = arr1.indexOf("S");
console.log(arrIndexof);
console.log(arrIndexOf); //-1 es cuando no existe el valor buscado

console.log("--.LASTINDEXOF()--"); //.LASTINDEXOF() --
//Busqueda desde atras del array (se coloca el elemento a buscar)
let arrLastIndexof = arr1.lastIndexOf("Marcelo");
let arrLastIndexOf = arr1.lastIndexOf("C");
console.log(arrLastIndexof);
console.log(arrLastIndexOf); //-1 es cuando no existe el valor buscado

console.log("--.INCLUDES()--"); //.INCLUDES() --
//Busqueda de un elemento obteniendo como resultado True o False (se debe colocar elemento a buscar)
let arrIncludes = arr2.includes("Geovanna");
console.log(arrIncludes);

/* ---- Fusionar Arrays ------- */

console.log("--.PUSH()--"); // Con el uso de .PUSH -- (array a fusionar)
let arrFus1 = arr1.push(...arr2);
console.log(arr1);

console.log("--.CONCAT()--"); //Con el uso de .CONCAT -- (array a fusionar)
let arrFus2 = arr1.concat(arr2);
console.log(arrFus2);

/* ---------- // Metodos con Callbacks // ------------- */

//Estos metodos utilizan como parametos una funcion Callback y como opcional como segundo parametro el indicar el objeto en el caso de que se quiera usar "this" en sus propiedades, pero para este caso es necesario NO usar las arrow function

console.log("--.FIND()--"); //.FIND() --
//Buscar si existe el elemento en el array(Callback con condicion), retorna el primer elemento encontrado igual a la condicion
let funFind = (nombres) => {
  return nombres === "Geovanna";
};
let arrFind = arr1.find(funFind);
console.log(arrFind);

console.log("--.SOME()--"); //.SOME() --
//Indica si existe al menos un elemento del buscado(Callback con condicion), retornando true o false
let exist = (value, array) => {
  return arr1.some((e) => {
    return e === value;
  });
};
console.log(exist("Soledad", arr1));
//usando el parametro "this" como opcion dentro del metodo
let edades = [11, 14, 16, 18, 20];
let edad = {
  min: 17,
  max: 19,
};
let edadPuntual = edades.some(function (e) {
  return e >= this.min && e <= this.max;
}, edad); //ultimo parametro utilizado para referenciar el this con su objeto
console.log(edadPuntual);

console.log("--.EVERY()--"); //.EVERY() --
//Compara todos los elementos del array y verifica que todos cumplan la condicion (true), caso contrario (false)
let par = [2, 4, 6, 8];
let arrEvery = par.every((e) => {
  return e % 2 === 0;
});
console.log(arrEvery);

console.log("--.FOREACH()--"); //.FOREACH() --
//Recorre todos los elementos del array mientras ejecuta el callback
const colores = ["rojo", "verde", "amarillo"];
colores.forEach(function (e, index) {
  console.log(`<li id = ${index}>"${e}"<li>`);
});

/* ------------ // METODOS ARRAY // ------------ */

let arr1 = ["Marcelo", "Soledad", "Geovanna", "Susana", "Daniel", "Cristian"];

//Spread Operator para arrays
let arr2 = [...arr1, "Oscar", "Elena"];
console.log(arr2);

//Recorrer un array y conocer la cantidad o longitud de elementos dentro
let arrLength = arr1.length;
console.log(arrLength);

//Agrega un nuevo valor al final del array, y devuelve la nueva longitud (1 o mas parametros a insertar)
let arrPush = arr2.push("PUSH");
console.log(arr2);
console.log(arrPush);

//Elimina el ultimo valor del array original y lo captura (no se le coloca parametro)
let arrPop = arr2.pop();
console.log(arr2);
console.log(arrPop);

//Agrega un parametro al principio y retorna la nueva longitud (1 o mas parametros a insertar)
let arrUnshift = arr2.unshift("UNSHIFT");
console.log(arr2);
console.log(arrUnshift);

//Elimina el primer elemento y lo captura (no se coloca parametro)
let arrShift = arr2.shift();
console.log(arr2);
console.log(arrShift);

//Une todo los valores del array con un string "-" o en default "," (se le envia o no un string)
let arrJoin = arr1.join("-JOIN-");
console.log(arrJoin);

//Busca un elemento y entrega su posicion (se debe colocar elemento a buscar)
let arrIndexof = arr1.indexOf("Cristian");
let arrIndexOf = arr1.indexOf("S");
console.log(arrIndexof);
console.log(arrIndexOf); //-1 es cuando no existe el valor buscado

//Busqueda desde atras del array (se coloca el elemento a buscar)
let arrLastIndexof = arr1.indexOf("Marcelo");
let arrLastIndexOf = arr1.indexOf("C");
console.log(arrLastIndexof);
console.log(arrLastIndexOf); //-1 es cuando no existe el valor buscado

//Busqueda de un elemento obteniendo como resultado True o False (se debe colocar elemento a buscar)
let arrIncludes = arr2.includes("Geovanna");
console.log(arrIncludes);

/* ---- Fusionar Arrays ------- */

// Con el uso de .push(array a fusionar)
let arrFus1 = arr1.push(...arr2);
console.log(arr1);

//Con el uso de .concat(array a fusionar)
let arrFus2 = arr1.concat(arr2);
console.log(arrFus2);

//Buscar si existe el elemento en el array ()
/* let arrFind = arr1.find();
console.log(arrFind); */

//Indica si existe al menos un elemento del buscado (elemento a buscar)
/* let arrSome = arr1.some();
console.log(arrSome); */

/* -------------- WEAKSET - WEAKMAP ---------- */

/* Tipo de datos debiles donde su funcionalidad es acotada, y donde el navegador los borra en cunanto finaliza su ejecucion para mejorar el rendimiento de la aplicacion. 
Sus limitaciones son: no son iterables, no se pueden limpiar en su totalidad con Clear, se eliminan y se crean de uno sus valores, no se puede conocer su longitud */

/* -----------WEAKSET ------------  */

/* Solo se puede agregar propiedades con el uso de add y solo recibe objetos referenciadas en una variable */

let ws = new WeakSet();

let set1 = { numero: 1 };
let set2 = { numero: 2 };
let set3 = { numero: 3 };

ws.add(set1);
ws.add(set2);

console.log(ws);

console.log(ws.has(set1));

//si un objeto se convirtiera en null se borraria automaticamente del WS

/* ---------- WEAKMAP ------------- */

/* Solo se puede agregar propiedades con el uso de set y solo recibe objetos clave valor referenciadas en una variable */

let wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
wm.set(llave3, 3);

console.log(wm);

console.log(wm.has(llave1)); //true
console.log(wm.get(llave1)); //1

wm.delete(llave3);

//si un objeto se convirtiera en null se borraria automaticamente del WM

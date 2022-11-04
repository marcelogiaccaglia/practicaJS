/* ------------------ THIS ------------------- */

/* this es un keyword que referencia al objeto en el que se ecuentra o se esta trabajando, dependiendo del contexto */

console.log(this); //this solo fuera de todo bloque hara referencia al contexto global
console.log(this === global);

const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  }, // si la propiedad que esta utilizando el this no existe, este se saltara el scope hacia el padre
};

obj.imprimir(); // para este caso this esta dentro de un scope/bloque y ese sera su contexto

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj2.imprimir();
/* en este caso una arrow function no genera scope por lo que el contexto padre del objeto en el que se encuentra sera su contexto, para este caso sera el contexto global */

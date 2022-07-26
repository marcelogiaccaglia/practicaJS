/* --------------// OBJETOS LITERALES // -------------- */

/* Los objetos estas compuestos de propiedades "clave : valor" o de metodos que 
  son funciones dentro de un objeto */

let objetLit = {
  depto: 7,
  piso: 5,
  familia: "Giaccaglia",
  metodo: function (a = 2, b = 4) {
    return a + b;
  },
};

/* Usando el Dot Notation accedemos a las propiedades del objeto literal */
console.log(objetLit.familia);
/* Con el Dot Not podemos acceder a un metodo y el mismo lo ejecutamos con () */
console.log(objetLit.metodo());

/* Para agregar una propiedad a un Objeto literal */
objetLit.torre = "BC";
console.log(objetLit);

/* Si queremos utilizar una propiedad dentro del mismo objeto podemos utilizar this. */

let objetLit2 = {
  depto: 7,
  piso: 5,
  familia: "Giaccaglia",
  metodo: function (a = 2, b = 4) {
    return a + b + " " + this.familia;
  },
};
console.log(objetLit2.metodo());

/* ------- // Construccion de Objetos // ------------ */

/* Se debe utilizar una funcion constructora de Objetos, este es un molde, donde cada parametro es una propiedad del objeto a crear */

function Descartables(producto, marca, precio) {
  this.producto = producto;
  this.marca = marca;
  this.precio = precio;
}

/* El nombre de la funcion es la que usaremos para llamar para la construccion, buena practica es iniciar con mayuscula -- Los parametros seran las propiedades del Objeto -- Con la logica del cuerpo es la que generara clave y valores al Objeto */

//Instanciar a un Objeto

let bolsaCamiseta = new Descartables("Camiseta Economica", "Cofeco", "$200");
console.log(bolsaCamiseta);

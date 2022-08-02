/* --------------// OBJETOS LITERALES // -------------- */

/* Los objetos estas compuestos de propiedades "clave : valor" o de metodos que 
  son funciones dentro de un objeto */

const o = new Object(); // Propiedad Constructora

let objetLit = {
  depto: 7,
  piso: 5,
  familia: "Giaccaglia",
  caracteristicas: ["puerta", "ventana"],
  otrasCarac: {
    puerta: "blanca",
    ventana: "rejas",
  },
  metodo: function (a = 2, b = 4) {
    return a + b;
  },
};

console.log(objetLit["familia"]); // forma de acceder a valores

/* Usando el Dot Notation accedemos a las propiedades del objeto literal */
console.log(objetLit.familia);
console.log(objetLit.caracteristicas[1]);
console.log(objetLit.otrasCarac.puerta);

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
    return ` ${a + b} ${this.familia} `; // lo mismo que (a + b + " " + this.familia;)
  },
};
console.log(objetLit2.metodo());

/* Nueva forma de crear objetos literales */ /* NO SE DEBE USAR ARROW FUNCTION EN METDOS DE OBJETOS LITERALES */ console.log(
  "Nueva Forma de Codigo"
);

let name = "Marcelo";
let lastName = "Giaccaglia";

let dni = {
  name,
  lastName,
  d_n_i: 30819354,
  documento() {
    console.log(
      `Mi documento dice ${this.name} ${this.lastName} con ${this.d_n_i}`
    );
  },
};

dni.documento();

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

/* ----------- Metodos de Objetos -------------- */

/* -- .KEYS() */ console.log("-- .KEYS()");
/* Si queremos conocer todas claves del objetos y asignarlos a un array */
console.log(Object.keys(objetLit2));

/* -- .VALUES() */ console.log("-- .VALUES()");
/* Si queremos conocer todos los valores del objetos y asignarlos a un array */
console.log(Object.values(objetLit2));

/* -- .HASOWNPROPERTY() */ console.log("-- .HASOWNPROPERTY()");
/* Si queremos saber si existe una propiedad en particular (true o false) */
console.log(objetLit2.hasOwnProperty("piso"));
console.log(objetLit2.hasOwnProperty("edificio"));

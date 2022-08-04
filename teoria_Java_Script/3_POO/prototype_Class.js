/* ------------ // Prototype - Constructor de Objetos // ------------- */
console.log("Constructor de Objetos");

/* POO es la denominacion de Programacion Orientada a Objetos con la cual trabaja JS y esta esta basada en prototipos */

/* 4 propiedades de los prototipos
 - Clase: Es el modelo a seguir
 - Objeto: Es una instancia (copia), de una clase
 - Atributos: Propiedad del objeto (las variables)
 - Metodos: Accion que el objeto puede realizar (una funcion) */

/* Si existe la necesidad de la creacion de objetos con una N cantidad, se debe utilizar una funcion constructora de Objetos, este es un molde o prototipo, donde cada parametro es una propiedad del objeto a crear */

function Descartables(producto, marca, precio) {
  //Atributos
  this.producto = producto;
  this.marca = marca;
  this.precio = precio;
}
//Metodos
Descartables.prototype.caracteristica = function () {
  console.log(
    `El ${this.producto} con marca ${this.marca} vale $ ${this.precio}`
  );
};
// De esta manera el metodo estara dentro del prototipo Object y no en la funcion constructora, ocupando menos recusos

/* El nombre de la funcion es la que usaremos para llamar para la construccion, buena practica es iniciar con mayuscula -- Los parametros seran las propiedades del Objeto -- Con la logica del cuerpo es la que generara clave y valores al Objeto */

//Instanciar (copiar) un Objeto

let bolsaCamiseta = new Descartables("Camiseta Economica", "Cofeco", "$200");
console.log(bolsaCamiseta);

/* ------ Herencia Prototipica -------- */ console.log("Herencia Prototipica");

/* Es el modo de usar caracteristicas de un prototipo como padre */

function plastico(producto, marca, precio, stock) {
  this.super = Descartables; //Indicamos el prototipo padre
  this.super(producto, marca, precio); //usaremos los mismos parametros del padre
  this.stock = stock; //podemos agregar atributos solo del hijo
}

/* Plastico esta heredando de Descartables */
plastico.prototype = new Descartables();
plastico.prototype.constructor = plastico;

/* Instanciando un Objeto hijo */
const basurin = new plastico("basurero", "DesesPlast", 300, 20);

console.log(basurin);

/* ---------------- // CLASES // ----------------- */
console.log("--CLASES--");

/* Es lo que se usa actualmente y su sintaxis es mas abreviada */

class Descartable {
  constructor(product, brand, value) {
    //Atributos
    this.product = product;
    this.brand = brand;
    this.value = value;
  }

  //Metodos
  caracteristic() {
    console.log(
      `La ${this.product} con marca ${this.brand} vale $ ${this.value}`
    );
  }
}

const bag = new Descartable("bolsa residuo", "la bolsita", 200);

console.log(bag);
bag.caracteristic();

// ---- Herencia Prototipica en Clases ------
console.log("--Herencia--");

class Plastic extends Descartable {
  constructor(product, brand, value, otro) {
    super(product, brand, value);
    this.otro = otro;
    this.material = null; //No se lo coloca en los parametros obligatorios del constructor
  }

  //Podemos sobreescribir el metodo padre
  caracteristic() {
    console.log(
      `El ${this.product} con marca ${this.brand} vale $ ${this.value} con color ${this.otro}`
    );
  }

  //Metodo Static para ejecutar un metodo sin la necesidad de instanciar la clase
  static cualidades() {
    console.log("El producto es fabricado de Polietileno");
  }

  //Metodo Getter y Setter, son metodos especiales obtenedores y establecedores que aplican sobre un atributo o parametro vacio del objeto prototipo, para otorgarle un valor. Aunque su sintaxis es la misma que un metodo, JS lo toma como atributo a la hora de necesitar ejecutarlo
  get getMaterial() {
    return this.material;
  }

  set setMaterial(material) {
    this.material = material;
  }
}

Plastic.cualidades(); //Se ejecuta antes de intanciar el prototipo hijo

const mopero = new Plastic("mopero", "DesesPlast", 500, "Rojo");

console.log(mopero);
mopero.caracteristic();
Plastic.setMaterial = "Polietileno"; //hay que trabajarlo como atributo/propiedad
console.log(Plastic.getMaterial);

/* ----------------- PROPIEDADES DINAMICAS PARA LOS OBJETOS LITERALES ------------------ */

/* Es un metodo para cear propiedades a un objeto literal en forma dinamica, por ejemplo si se solicita a una base de datos determinados usuarios, este metodo creara una propiedad otorgandole un id en forma dinamica */

let aleatoreo = Math.round(Math.random() * 100 + 5);

const objUsuarios = {
  propiedad: "valor",
  [`id_${aleatoreo}`]: "Usuario Aleatorio",
};
/* con el uso de [] creamos propiedades dinamicas */

console.log(objUsuarios);

const usuarios = ["Marcelo", "Soledad", "Geovy", "Daniel", "Susana"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));
/* para este caso a objUsuarios le asignamos una nueva propiedad pero con el uso de [] esta propiedad sera dinamica */

console.log(objUsuarios);

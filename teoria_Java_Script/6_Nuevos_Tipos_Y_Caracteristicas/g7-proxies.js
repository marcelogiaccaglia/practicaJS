/* ------------ PROXIES ------------------ */

/* Los Proxies crean un objeto tomando un objeto literal como base, estos dos tendran una vinculacion y en el medio existira un handler que nos permitira validar la informacion que envia el cliente */

let persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

let handler = {
  set(obj, prop, valor) {
    /* este metodo tendra como parametros el objeto y sus elementos para validar */
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad "${prop}" solo acepta letras y espacios en blanco`
      );
    } /* se utiliza una expresion regular para la validacion */
    obj[prop] = valor;
  },
};

let marcelo = new Proxy(
  persona,
  handler
); /* se utiliza el objeto proxy para crear un nuevo objeto */

marcelo.nombre = "Marcelo12";
marcelo.apellido = "Giaccaglia";
marcelo.edad = 38;
/* el cliente envia los nuevos valores que seran validados por el handler */

console.log(marcelo);

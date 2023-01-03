/* ------ localStorage & sessionStorage -------- */

/* Son metodos de JavaScript que ya vienen por defecto y trabajan como una variable almacenando informacion que solo puede ser de tipo string o JSON, (en el caso de querer almacenar arrays u Objetos Literal deberemos transformarlos a JSON con stringify)

-localStorage: es una propiedad que guarda informacion indefinidamente
-sessionStorage: es una propiedad que guarda informacion mientras el navegador este abierto

Ambos comparten los mismos metodos
- .setItem("key", "info") para asignar un valor a la key definida
- .getItem("key") para consultar u obtener la info de la key
- .removeItem("key") para borrar solo la key definida
- .clear() borra toda la informmcion almacenada en el Storage*/

window.addEventListener("load", (e) => {
  if (localStorage.getItem("NombreUser") === undefined) {
    let nombre = prompt("Escibe tu nombre");
    localStorage.setItem("NombreUser", nombre);
    const $usuario = document.getElementById("usuario");
    $usuario.innerHTML = `Hola ${nombre}`;
  } else {
    let nombre = localStorage.getItem("NombreUser");
    const $usuario = document.getElementById("usuario");
    $usuario.innerHTML = `Hola ${nombre}`;
  }
});

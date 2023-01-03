/* ----------- FETCH ------ (ver informacion del apartado de Promise.js) */

const $fetch = document.getElementById("fetch"),
  $fragment = document.createDocumentFragment();

/* fetch("assets/users.json") -- fetch puede trabajar con informacion local */
fetch(
  "https://jsonplaceholder.typicode.com/users"
) /* Fetch puede recibir como otros parametros el metodo de envio, por defecto este metodo es GET y no hace falta colocarlo en este caso */
  /* ---- */
  /* Fetch utiliza como mecanismo de respuesta las promesas .then() y .catch()
  El formato de la estructura de Fetch es ---- Fetch(url + method).then().catch().finally() --- Donde en then(res -> espera una respuesta) en cath (err -> espera un error y en finally(Opcional, no recibe nada y siempre ejecuta el codigo que pongamos)*/
  /* ---- */
  /* Fetch nos entrega un Objeto tipo response con propiedades, dentro de las mismas tenemos body que contirne la informacion de la URL en un formato "Readablestrem", a este hay q convertirlo en un formato valido, con el metodo .json convertimos en JSON, .text para uso en HTML o .blop */

  .then((res) =>
    res.ok ? res.json() : Promise.reject(res)
  ) /* Creamos un primer .then como validacion con operadores ternarios en este caso (si la propiedad res.ok es True, entonces utiliza el metodo .json para transformar la propiedad body, este metodo trabaja como un .parse convirtiendolo en un objeto iterable. Caso contrario ejecuta .reject del Objeto Promise de esta manera se ejecuta el catch) */
  .then((json) => {
    /* El segundo .then ya tiene la informacion parseada para poder ser trabajada en el codigo */
    console.log(json);
    //$fetch.innerHTML = json; (esto no se puede hacer)
    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $fetch.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $fetch.innerHTML = `Error ${err.status}: ${message}`;
  })
  .finally(() => {
    console.log(
      "Esto se ejecutará independientemente del resultado de la Promesa Fetch"
    );
  });

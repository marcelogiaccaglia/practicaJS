/* Debemos seguir 4 pasos importantes a la hora de utilizar el Objeto XMLHttpRequest
1 - Instanciar en una variable un nuevo objeto de tipo XMLHttpRequest
2 - Asignarle el o los eventos a esta variable instanciada y luego la programacion la haremos sobre el callback
3 - Abrir la peticion, establecer el metodo necesario (GET, POST, PUT, DELETE) y establecer el recurso, o URL o EndPoint
4 - Enviar la peticion con metodo send (este metodo send puede recibir prametros como GET, POST, PUT, DELETE) */

const xhr =
    new XMLHttpRequest() /* crear una variale que instancia un nuevo objeto */,
  $xhr = document.getElementById("xhr") /* Capturar el id */,
  $fragment =
    document.createDocumentFragment(); /* para no elevar disminuir el rendimiento de nuestra maquina por el consumo de nuestra app al enviar mucha info al DOM, se utiliza fragment para recolectar toda la peticion y luego enviarla al DOM en un solo envio */

xhr.addEventListener("readystatechange", (e) => {
  /* readystatechange es el metodo mas impotante ya que detecta los metodos anteriores al mismo (se lanza cuando detecta cualquier cambio de estado) */
  if (xhr.readyState !== 4)
    return; /* Codigo de validacion para asegurarnos que solo tenemos el estado complete */

  console.log(xhr);

  if (xhr.status >= 200 && xhr.status < 300) {
    /* Validacion para que ejecute un codigo si la peticion es la esperada dentro del 200 que son exitosas */
    console.log("éxito");
    console.log(
      xhr.responseText
    ); /* La respuesta viaja en esta propiedad responseText */
    //$xhr.innerHTML = xhr.responseText; (esto no se puede hacer)
    let json = JSON.parse(xhr.responseText); /* lo convetimos en objeto JS */
    console.log(json);

    json.forEach((el) => {
      /* Recorremos el array creado con un forEach */
      const $li =
        document.createElement(
          "li"
        ); /* Creamos una variable del DOM que cree una nueva etiqueta */
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; /* Le agregamos la infomacion que necesitamos y se repetira las veces necesarias debido al forEach */
      $fragment.appendChild($li); /* Le insertamos el fragment */
    });

    $xhr.appendChild(
      $fragment
    ); /* Por ultimo la insertamos el fragment como hijo a la etiqueta capturada en la variable $xhr */
  } else {
    console.log("error");
    /* en el caso de error creamos un mensaje */
    let message = xhr.statusText || "Ocurrió un error";
    /* si el statusText viene vacio, enviamos un mensaje nosotros */
    $xhr.innerHTML = `Error ${xhr.status}: ${message}`; /* insertamos el mensaje al DOM */
  }

  console.log("Este mensaje cargará de cualquier forma");
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//xhr.open("GET", "assets/users.json");/* peticion a un archivo local */

xhr.send();

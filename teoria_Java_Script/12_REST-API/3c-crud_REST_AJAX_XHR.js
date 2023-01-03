const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template =
    d.getElementById(
      "crud-template"
    ).content /* Nos interesa capturar el contenido de la etiqueta template y no la etiqueta en si, es por eso se usa contenet */,
  $fragment = d.createDocumentFragment();

/* Debemos seguir 4 pasos importantes a la hora de utilizar el Objeto XMLHttpRequest
      1 - Instanciar en una variable un nuevo objeto de tipo XMLHttpRequest
      2 - Asignarle el o los eventos a esta variable instanciada y luego la programacion la haremos sobre el callback
      3 - Abrir la peticion, establecer el metodo necesario (GET, POST, PUT, DELETE) y establecer el recurso, o URL o EndPoint
      Agregamos la configuracion de la cabezera ya que es muy importante esta informacion para cualquier tipo de metodo a utilizar
      4 - Enviar la peticion con metodo send (este metodo send puede recibir prametros como GET, POST, PUT, DELETE) */

const ajax = (options) => {
  /* Se crea una funcion la cual poseera los 4 pasos principales para aplicar AJAX con el uso del Objeto XMLHttpRequest */

  let { url, method, success, error, data } =
    options; /* Destructuramos las propiedades y metodos necesarios para el uso de AJAX, las cuales sus valores seran dados durante la ejecucion de la funcion*/

  const xhr = new XMLHttpRequest(); /* 1-instanciamos */

  xhr.addEventListener("readystatechange", (e) => {
    /* 2-asignamos eventos a la variable instanciada para el caso de succes o error */

    if (xhr.readyState !== 4) return; /* 1° validacion */

    if (xhr.status >= 200 && xhr.status < 300) {
      /* 2° validacion */
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(
    method || "GET",
    url
  ); /* 3-el metodo open espera un metodo que por defecto ya es GET y el endpoint */

  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  /* con este metodo configuramos la cabezera que es importante su configuracion  ya que este metodo por default trabaja con texto plano, la informacion de configuracion del metodo puede usar mayusculas o minusculas */

  xhr.send(JSON.stringify(data)); /* 4-se envia peticion */
};

const getAll = () => {
  /* Creamos una funcion que ejecute la funcion creada con la funcinalidad de AJAX donde pasaremos los parametros que se ejecutaran en la variable destructurada */
  ajax({
    method:
      "GET" /* esta propiedad no es necesario especificar para el caso de GET ya que son GET por defecto */,
    url: "http://localhost:3000/usuarios",
    success: (res) => {
      console.log(res);

      res.forEach((el) => {
        $template.querySelector(".nombre").textContent = el.nombre;
        $template.querySelector(".ocupacion").textContent = el.ocupacion;
        $template.querySelector(".edit").dataset.id =
          el.id; /* Sobre el boton con clase edit le daremos el valor de id de la informacion que este acompaña */
        $template.querySelector(".edit").dataset.nombre = el.nombre;
        $template.querySelector(".edit").dataset.ocupacion = el.ocupacion;
        $template.querySelector(".delete").dataset.id = el.id;

        let $clone = d.importNode($template, true);
        /* El template hay que clonarlo para que quede en memoria, por lo que lo clonamos con el metodo importNode y las propiedades entre corchetes son la variable capturadora, y si es True clona tambien el contenido */

        $fragment.appendChild(
          $clone
        ); /* Agregamos el contenido clonado a un fragmento para luego insertar todo la informacion de una sola vez */
      });

      $table
        .querySelector("tbody")
        .appendChild(
          $fragment
        ); /* Se le agrega el fragment como hijo de la etiqueta capturada que se encuentra dentro de la variable del DOM  */
    },
    error: (err) => {
      console.log(err);
      /* Insertamos el error abajo de toda la etiqueta capturada */
      $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
    data: null /* No es necesario el envio de ningun dato para un metodo tipo GET  */,
  });
};

d.addEventListener(
  "DOMContentLoaded",
  getAll
); /* Cuando el documento cargue todo la pagina, con el evento DOMContentLoaded se ejecutara la funcion getAll */

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault(); /* Cuando el evento submit se ejecute y el evento sea dentro del formulario capturado en la variable del DOM $form, que se ejecute el preventDefault */

    if (!e.target.id.value) {
      //Create - POST
      ajax({
        url: "http://localhost:3000/usuarios",
        method: "POST",
        success: (res) => location.reload(),
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre:
            e.target.nombre
              .value /* la llave es el nombre del JSON y el valor .nombre es el nombre del input */,
          ocupacion: e.target.ocupacion.value,
        },
      });
    } else {
      //Update - PUT
      ajax({
        url: `http://localhost:3000/usuarios/${e.target.id.value}` /* como valor variable se buscara la id a editar */,
        method: "PUT",
        success: (res) => location.reload(),
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          ocupacion: e.target.ocupacion.value,
        },
      });
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Usuario";
    /* Cambiamos el titulo */
    $form.nombre.value = e.target.dataset.nombre;
    /* acceder al imput nombre y en su valor vamos a escribir lo que venga del boton seleccionado con el e.target */
    $form.ocupacion.value = e.target.dataset.ocupacion;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      //Delete - DELETE
      ajax({
        url: `http://localhost:3000/usuarios/${e.target.dataset.id}` /* El e.target es el boton, acceder a su lista de data atributes(dataseet) y su valor id */,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (err) => alert(err),
      });
    }
  }
});

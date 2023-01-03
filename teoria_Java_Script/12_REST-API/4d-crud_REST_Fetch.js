/* IMPORTANTE --  siempre tener levantado el JsonServer en consola json-server -w -p ("puerto") db.json */
const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

/* Creamos una funcion asincrona donde dentro de la misma utilizaremos el metodo try - catch */
const getAll = async () => {
  try {
    /* creamos la primer variable donde se le asigna el metodo fetch siempre utilizando el await para la espera de la respuesta */
    let res = await fetch("http://localhost:3000/usuarios"),
      /* Converitmos la respuesta de fetch a JSON con el metodo .json  */
      json = await res.json();
    /* Creamos un condicional donde decimos si la respuesta res.ok es falsa arrojamos la siguiente informacion de error que sera capturado por el catch(err)*/
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    console.log(json);
    /* creamos un forEach por cada elemento */
    json.forEach((el) => {
      /* sobre el contenido de la variable del DOM $template busca el selector con clase ".nombre" y en su propiedad texContent agrega el.nombre*/
      $template.querySelector(".nombre").textContent = el.nombre;
      $template.querySelector(".ocupacion").textContent = el.ocupacion;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.nombre = el.nombre;
      $template.querySelector(".edit").dataset.ocupacion = el.ocupacion;
      $template.querySelector(".delete").dataset.id = el.id;

      /* Importamos un nodo de la etiqueta tamplate con el segundo valor en true para copiar la estructura del contenido */
      let $clone = d.importNode($template, true);
      /* a la variable fragment le insetamos la variable clone */
      $fragment.appendChild($clone);
    });

    /* Sobre la variable table buscamos el selector tbody y agragamos la variable fragment */
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    /* Creamos el mensaje de error que queremos que se vizualice con un or (||) en el caso de que no venga la informacion de err.statusText */
    let message = err.statusText || "Ocurrió un error";
    /* Insertamos el mensaje debajo de la tabla con el siguiete metodo insert... en sus parametros le indicamos donde con "afterend" y luego definimos el mensaje */
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

/* la funcion getAl se ejecutara a la carga del documento, una vez cargado se ejecutara! */
d.addEventListener("DOMContentLoaded", getAll);

/* sobre el documento si existe un evento por submit se ejecutara una funcion asincrona donde tendra como parametro el evento "e" y el condicional preguntara si el evento al q se hace referencia pertenece dentro de la variable $form ejecutar lo siguiente...... */
d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    /* cortar el submit */
    e.preventDefault();

    /* si en el objeto que origina el evento en el selector .id su valor es null tendriamos un false pero lo negamos con ! para que sea true */
    if (!e.target.id.value) {
      //Create - POST
      try {
        /* creamos un objeto con la informacion de la cabecera necesaria para el envio de informacion POST */
        let options = {
            /* enviamos el tipo de metodo */
            method: "POST",
            /* enviamos las cabeceras */
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            /* hay q enviar la informacion en JSON */
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              ocupacion: e.target.ocupacion.value,
            }),
          },
          /* La variable opciones se la enviamos como segundo parametro a fetch */
          res = await fetch("http://localhost:3000/usuarios", options),
          json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        /* para actualizar la pagina en automatico */
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        /* En este caso el mensaje de error lo enviamos debajo del form */
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      //Update - PUT
      /* La informacion utilizada es similiar a la utilizada en el POST */
      try {
        let options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              ocupacion: e.target.ocupacion.value,
            }),
          },
          /* el URL a utilizar en este caso sera una URL dinamica donde solicitaremos el valor del id del campo del evento seleccionado */
          res = await fetch(
            `http://localhost:3000/usuarios/${e.target.id.value}`,
            options
          ),
          json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        /* ejecutamos el reload de la pagina para ver los cambios en el caso de no existir un error y no ejecutarse el if anterior */
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

/* Creamos un capturador de eventos donde el evento click sobre determinada clase realiza la accion de agregar la inforamcion en los campos para el caso de editar o consultar y ejecutar el codigo para el caso del delete */
d.addEventListener("click", async (e) => {
  /* para un evento click, si sobre el docuento el evento se realiza sobre el class .edit (boton) gernerar los siguientes cambios*/
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Usuario";
    $form.nombre.value = e.target.dataset.nombre;
    $form.ocupacion.value = e.target.dataset.ocupacion;
    $form.id.value = e.target.dataset.id;
  }
  /* Si el objeto que genera el evento es el boton de tipo class delete se ejecuta confirm */
  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      //Delete - DELETE
      /* Si la confirmacion es verdadera */
      try {
        let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            /* la cabecera no necesita especificar un cuerpo ya que en el endpoint o URL especificamos que valor de id es el que se va a eliminar */
          },
          res = await fetch(
            `http://localhost:3000/usuarios/${e.target.dataset.id}`,
            options
          ) /* El boton de eliminar tiene un data atibiute por lo que en el valor dinamico utilizamos el dataset.id */,
          json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        /* el error se envia en una alerta */
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});

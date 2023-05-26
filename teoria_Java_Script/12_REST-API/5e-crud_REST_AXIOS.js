/* Instalamos Axios con npm i axios o pegamos en html el scipt del CDN <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
Sobre el metodo axios utilizamos la estructura de metodos de .get(URL de la API) .then(res) .catch(err) .finally(opcional), El CDN de Axios lo obtenemos del GIT Hub de axios*/
/* No olvidar de ejecutar el JSON server */

const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  /* Esta funcion expresada trabajara en forma asincrona con los metodos Try- Catch */
  try {
    /* Creamos la primera varibale que contiene la respuesta de axios */
    let res = await axios.get("http://localhost:5555/santos"),
      /* Creamos otra variable que nos trae la informacion ya en formato JSON */
      json = await res.data;

    console.log(json);

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.nombre;
      $template.querySelector(".ocupacion").textContent = el.ocupacion;
      /* Sobre la clase edit utilizamos un data atribute (dataset) donde dentro del mismo almacenamos la informacion para luego ser usada para que la misma la podamos enviar al formulario para su edicion */
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.nombre = el.nombre;
      $template.querySelector(".edit").dataset.ocupacion = el.ocupacion;
      $template.querySelector(".delete").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener(
  "DOMContentLoaded",
  getAll
); /* En el momento que el documento cargue por completo se ejecutara la funcion declarada getAll */

d.addEventListener("submit", async (e) => {
  /*Si el evento se genera en el formulario se ejecuta el codigo siguiente */
  if (e.target === $form) {
    e.preventDefault();
    /*Si el value de id viene vacio se ejecuta el codigo de POST, caso contrario se ejecuta PUT*/
    if (!e.target.id.value) {
      //Create - POST
      try {
        let options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await axios("http://localhost:5555/santos", options),
          /*Se coloca solo axios ya que el metodo esta epecificado dentro de la variable options*/
          json = await res.data;

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      //Update - PUT
      try {
        let options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await axios(
            `http://localhost:5555/santos/${e.target.id.value}`,
            options
          ),
          json = await res.data;

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

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      //Delete - DELETE
      try {
        let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
          },
          res = await axios(
            `http://localhost:5555/santos/${e.target.dataset.id}`,
            options
          ),
          json = await res.data;

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});

/* -------------AXIOS - Async/Await ----------------- */

const $axiosAsync = document.getElementById("axios-async"),
  $fragment = document.createDocumentFragment();

/* Creamos una funcion asincrona y dentro de la misma creamos la estructura del try-catch pero con el uso de axios */
async function getData() {
  try {
    /* al crear la variable que contiene el primer await utilizamos el axios.get(URL) para traer la informacion de la API */
    let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
      json = await res.data;

    console.log(res, json);

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $axiosAsync.appendChild($fragment);
  } catch (err) {
    /* en catch utilizamos la propiedad de error que trae la libreria con su propiedad response*/
    console.log(err.response);
    let message = err.response.statusText || "Ocurrió un error";
    $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
  } finally {
    console.log("Esto se ejecutará independientemente del try... catch");
  }
}
/* Finalemente ejecutamos la funcion */

getData();

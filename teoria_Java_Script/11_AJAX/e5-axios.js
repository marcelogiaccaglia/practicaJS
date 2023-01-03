/* --------------- AXIOS------------------ */

const $axios = document.getElementById("axios"),
  $fragment = document.createDocumentFragment();

/* Instalamos Axios con npm i axios o pegamos en html el scipt del CDN <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
Sobre el metodo axios utilizamos la estructura de metodos de .get(URL de la API) .then(res) .catch(err) .finally(opcional) */
axios
  //.get("assets/users.json")(puede utilizarse para informacion interna de la aplicacion)
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
    let json = res.data;

    /* Esta libreria nos entrega un Objeto diferente al de Fetch con Response, dentro de este Objeto nuevo vamos a encontrar varias propiedades entre ellas la propiedad "data" donde esta la inforamcion solicitada a la API pero esta ya viene parseada como objeto iterable */

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $axios.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err.response);
    /* Esta libreria tiene un propiedad para la utilizacion de los errores denominada response, a la misma se le puede pasar la informacion de las propiedades del objeto que nos entrega esta libreria como statusText o status */
    let message = err.response.statusText || "Ocurrió un error";
    $axios.innerHTML = `Error ${err.response.status}: ${message}`;
  })
  .finally(() => {
    console.log("Esto se ejecutará independientemente del resultado Axios");
  });

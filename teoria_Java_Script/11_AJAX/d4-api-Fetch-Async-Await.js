/* ---------- FETCH -Async/Await ----------- (mas info ver el apartado Async/Await.js) */

const $fetchAsync = document.getElementById("fetch-async"),
  $fragment = document.createDocumentFragment();

/* Creamos una funcion asincrona para luego utilizar los await que controlan el flujo, dentro de esta funcion utilizaremos la estructura try-catch --- try{} catch(err){} finally{opcional}  */
async function getData() {
  try {
    /* Creamos variables que esperen las respestas para segui con el hilo */
    let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();

    console.log(res, json);

    //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");/* El objeto Error no recibe objetos si no String solamente por lo que no se podria enviar la info de las propiedades de res */

    /* Ejecutamos un codigo de validacion que diga, si la opocicion de res.ok da True arroja (thow) el flujo al catch con el siguiente objeto */
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $fetchAsync.appendChild($fragment);
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
  } finally {
    console.log("Esto se ejecutará independientemente del try... catch");
  }
}

/* Finalmente ejecutamos la funcion */

getData();

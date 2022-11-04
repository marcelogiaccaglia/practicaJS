/* Eventos para controlar cambios dinamicos, Event Reference en MDN estan todos los existentes */

/* EL evento como atributo del HTML no es lo recomendable, lo recomendable es que los eventos esten definidos en esta hoja JS y no en una hoja html (ver archivo l12 de html, el button con evento onclick) */

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
} /* manejador de evento */

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

/* En los eventos semanticos no se le puede asignar diferentes funciones a un mismo evento, si se le asigna una nueva funcion como en el caso 2, esta pisa el manejador de eventos que se uso en una primera instancia  */
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
  console.log(event);
};

/* Para los eventos multiples, se pueden asiganar diferentes funciones a un mismo evento */
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

/* Evento con parametro enviado, esto no es una accion permitida ya que no se puede enviar parametros a una funcion manejadora, pero con la siguiente funcion se cambia la funcion manejadora por una arrow function  */
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Jon");
});

/* Eliminar eventos de un elemnto, es necesario si o si un manejador del evento que esta declarada en una variable, no puede ser una funcion anonima ya que la propiedad removeEventListener necesita dos parametros, el evento y el nombre del manejador */
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};
/* utilizamos la propiedad disabled para que el boton deje de funcionar una vez que se haya borrado el evento */

/* Luego de haber declarado los pasos a seguir en la funcion, utilizamos un evento multiple */
$eventoRemover.addEventListener("dblclick", removerDobleClick);

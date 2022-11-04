/* Los Templates son modelos a seguir, el cual ceamos en el cuerpo del html una etiqueta Template con etiquetas hijas sin infomacion ya que las mismas seran agregadas dianamicamente */

const $cards =
    document.querySelector(
      ".cards"
    ) /* Creamos una variable y capturamos la etiqueta que contendra los templates creados */,
  $template =
    document.getElementById(
      "template-card"
    ).content /* Creamos una variable capturando solo el contenido de la etiqueta template o sea sus hijos */,
  $fragment =
    document.createDocumentFragment() /* Creamos una variable que contenga un fagmento del DOM para agrupar en primera instancia toda la infomacion obtenida */,
  /* Creamos la inforamcion o usamos una API */
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

/* Iteramos la BD o la API para ir insertando inforamcion a su contenido */
cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode(
    $template,
    true
  ); /* Creamos una variable donde usaremos una propiedad que clonara los taplates creados */
  $fragment.appendChild(
    $clone
  ); /* Le insetamos la variable a la varible del fragmento del DOM */
});

$cards.appendChild(
  $fragment
); /* Insertamos la varibale del fragmento a la etiqueta especificada */

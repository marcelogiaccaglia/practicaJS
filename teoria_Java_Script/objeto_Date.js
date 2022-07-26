/* --------- // OBJETO DATE // ----------------- */

/* Objeto nativo de JS para trabajar con fechas, este objeto se debera instalar en una variabe para capturar su funcionalidad */

let fecha = new Date(); //entre los () se puede coloca una fecha puntual a trabajar

//Para obtener el numero del dia del mes
console.log(fecha.getDate());

//Para obtener el numero del mes, tener en cuenta que el calendario inicia en 0=(enero)
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviebre",
  "Diciembre",
];
let actualMonth;

for (let i = 0; i < meses.length; i++) {
  if (i == fecha.getMonth()) {
    actualMonth = meses[i];
  }
}
console.log(actualMonth);

//Para obtener el dia de la semana donde 0 = Domingo
let dia = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
let actualDay;

for (let i = 0; i < dia.length; i++) {
  if (i == fecha.getDay()) {
    actualDay = dia[i];
  }
}
console.log(actualDay);

//Para obtener el año completo
console.log(fecha.getFullYear());

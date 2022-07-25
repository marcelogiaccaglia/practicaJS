
/* ----------------- // OPERADORES // ---------------- */


    // El signo (=) se lo denomina de asigancion, con el mismo se le asigna valor a una variable //

    // ------ Arismeticos ----- //

    let suma = 2 + 4;
    console.log (suma);


    let resta = 2 - 5;
    console.log (resta);


    let multi = 2 * 4;
    console.log (multi);


    let divi = 2 / 4;
    console.log (divi);


    let incrementa = 3; // ++
    console.log (++incrementa);


    let decrementa = 2; // --
    console.log (--decrementa);


    let resto = 15 % 2; /* Obtenemos el resto de una division, en este ejemplo 2*7=14, sobra 1 */
    console.log (resto);

    
    // ----- Comparacion simple ------- //

    let num1 = 42;           /* El resultado sera siempre un Booleano */
    let num2 = "42";
    
    let compSimple = num1 == num2; /* Pregunta si el elemento es igual al otro sin importar si es string o num */
    console.log(compSimple);


    let compSimpleF = num1 != num2; /* Niega comparativa retornando lo contrario a la realidad */
    console.log(compSimpleF);


    let compEstric = num1 === num2; /* Compara si es igual en todo sentido */
    console.log(compEstric);


    let compEstricF = num1 !== num2; /* Niega comparativa retornando lo contrario a la realidad */
    console.log(compEstricF);


    let comp1 = num1 <= num2; /* menor o igual a */
    console.log(comp1);


    let comp2 = num1 >= num2; /* mayor o igual a */
    console.log(comp2);

    
    // ------ Logicos -------- //

    let respuesta;
    if (24>20 && 40>5) {         //(and) las dos comparaciones deben dar true, true+true = true//
          respuesta = "verdad";
    };
    console.log(respuesta);

    
    if (24>20 || 20<3) {            //(or) al menos una de las comparaciones debe ser true, false+true = true//
        console.log ("asi es OR");
    };
    
    
    if (!24<20) {
        console.log ("asi es NOT");  //(not) retorna lo contrario a la comparativa, !false = true//
    };
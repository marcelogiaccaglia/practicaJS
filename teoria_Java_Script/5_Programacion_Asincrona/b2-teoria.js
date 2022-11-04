/* ------------------ Conceptos en proceso Asincronico -------------- */

/* ------------------------------------------------------------------------------------- Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output). Debido a esto, JS es altamente Concurrente --------------------------------------------------------------------------------------*/

/* Procesamiento Single thread (Hilo único) y Multi thread (Hilos múltples).
Al ejecutar una aplicacion este levanta un proceso de un hilo o varios para que la ejecucion funcione */

/* Operaciones de I/O (Entrada y Salida).
Aquellas que pasan la mayor parte del tiempo esperando la respuesta de una petición o recurso, como la solicitud a una API o BD. */

/* Operaciones Concurrentes y Paralelas.
Concurrencia: cuando dos o más tareas progresan simultáneamente, una pudo haber empezado antes que la otra.
Paralelismo: cuando dos o más tareas se ejecutan, al mismo tiempo. */

/* Operaciones Bloqueantes y No Bloqueantes.
No Bloqueante: Son operaciones que devuelven inmediatamente el control a nuestra aplicación, independientemente del resultado de esta. En caso de que se haya completado, devolverá los datos solicitados. En caso contrario (si la operación no ha podido ser satisfecha) podría devolver un código de error. */

/* Operaciones Síncronas y Asíncronas.
Se refiere a ¿cuándo tendrá lugar la respuesta?:

Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.
Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado. */

/* ---------------  Mecanismos asíncronos en JavaScript ---------------
Para controlar la asincronía, JavaScript cuenta con algunos mecanismos:

Callbacks.
Promises.
Async / Await. */

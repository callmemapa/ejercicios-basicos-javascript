// PUNTO 1
// ¿Qué es un array?
// Un array es una lista de una dimensión ordenada de datos u objetos
// ¿Qué es un objeto?
// Un objeto es algo más grande que está compuesto por caracteristicas, clave/valor
// ¿Cuándo es mejor usar objetos o arrays?
// Los objetos pueden ser utilizados como modelos de datos, o plantillas, los arrays cuando necesito almacenar varios datos o varios objetos
// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// Si, puedo tener un objeto que contenga un array o un array que contenga objetos

// PUNTO 2
function imprimir_primero(array) {
    console.log(array[0]);
}

// PUNTO 3
function imprimir_array(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
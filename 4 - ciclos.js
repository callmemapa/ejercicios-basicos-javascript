// PUNTO 1
// ¿Qué es un ciclo?
// Es una sentencia capaz de recorrer un objeto, un array o cualquiera que sea iterable
// ¿Qué tipos de ciclos existen en JavaScript?
// for, while
// ¿Qué es un ciclo infinito y por qué es un problema?
// Es un ciclo que nunca se rompe, es un problema porque me va a ejecutar mi programa por siempre sin parar
// ¿Puedo mezclar ciclos y condicionales?
// Claro que si, puedo insertar ciclos dentro de condicionales y viceversa

// PUNTO 2
let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i += 1;
}

let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i -= 1;
}

// PUNTO 3
let ciclo = true;

while (ciclo) {
    let response = window.prompt("¿Cuánto es 2 + 2?");
    if (response == 4) {
        alert("Felicitacionesss!");
        ciclo = false;
    } else {
        alert("Mal, volvamos a empezar :(");
    }
}
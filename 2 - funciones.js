// PUNTO 1
// ¿Qué es una función?
// Una función recibe parametros para realizar cálculos dentro de ella y así resolver un problema
// ¿ Cuándo me sirve usar una función en mi código?
// Cuando necesito repetir un mismo proceso para diferentes datos.
// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
// Los paramétros son las variables que ponemos cuando se define una función, los argumentos son los valores que recibe la funcion para realizar los cálculos

// PUNTO 2
function imprimir_nombre(name, lastname, nickname) {
    complete_name = name + " " + lastname;
    mi_frase = "Mi nombre es " + complete_name + ", pero prefiero que me digas " + nickname + ".";
    return mi_frase;
}
// PUNTO 1
// ¿Qué es una condicional?
// Es una sentendia que realiza una validación y de acuerdo a esta validación, una decisión para realizar un proceso.
// ¿Qué tipos de condicionales existen en JavaScript?
// Están if, if else, switch
// ¿Puedo combinar funciones y condicionales?
// Claro que si, puedo hacer una función y que dentro de esta existan condicionales
// O puedo crear condicionales que me ejecuten funciones dentro de ellas

// PUNTO 2
const tipo_de_subscripcion = "Basic";

if (tipo_de_subscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipo_de_subscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipo_de_subscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipo_de_subscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No tienes una subscripción activa.");
}

// PUNTO 3
if (tipo_de_subscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipo_de_subscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
if (tipo_de_subscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 
if (tipo_de_subscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 
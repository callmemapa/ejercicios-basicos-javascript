// PUNTO 1
// ¿Qué es una variable y para que sirve?
// R: Es una representación en memoria para almacenar y/o guardar un valor.

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
// - Cuando declaro, le estoy dando un nombre y una asignación en memoria a mi variable
// - Cuando inicializo, le estoy dando un valor a mi variable
// Ejemplo declaración
var nombre;

// Ejemplo inicialización
nombre = "Maria Paula"

// ¿Cuál es la diferencia entre sumar números y concatenar strings?
// - Sumar números es una operación matemática, acumulo valores
// - Concatenar strings es juntar 2 o más strings en una sola

// ¿Cuál operador me permite sumar o concatenar?
// R: El operador es +

// PUNTO 2
// - Nombre: String
// - Apellido: String
// - Nombre de usuario en Platzi: String
// - Edad: Number
// - Correo electrónico: String
// - Mayor de edad: Boolean
// - Dinero ahorrado: Number
// - Deudas: Number

// PUNTO 3
var nombre = "Maria Paula";
var apellido = "Mosquera Rengifo";
var username = "callmemapa";
var edad = 22;
var email = "mariapaulamosquerarengifo@gmail.com";
var mayor_de_edad = true;
var dinero_ahorrado = 1500000;
var deudas = 200000;

// PUNTO 4
// Cálculo
var nombre_completo = nombre + " " + apellido;
var dinero_real = dinero_ahorrado - deudas;

// Imprimir
console.log(nombre_completo);
console.log(dinero_real);
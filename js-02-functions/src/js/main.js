/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
Legibilidad: Hacer que el código sea más claro y fácil de entender.
Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas
 funciones declaradas
  Recomendaciones para el uso de las funciones:

Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
Evitar efectos secundar
ios: Una función no debe modificar variables externas.*/

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/
/**
 * Funcion que recibe nombre y apellido y retorna el nombre
 * @param {string} firsName 
 * @param {string} lastName 
 * @returns concatenacion del nombre y apellido de la persona
 */


const printFullName = function (firsName, lastName){
  return `${firsName} ${lastName} estudiante de la CH62`
};
console.log(printFullName("Johan","Gonzales"))

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

//convertir la funcion printFullNAME A FUNCION FLEcha

const userName = (firsName, lastName) => `${firsName} ${lastName} estudiante de la CH62`;

   console.log(userName("Nayeli","Morales"))


const makeCoffe = (type = "Americano") => `prefarando un cafe ${type}`;

console.log(makeCoffe("Latte"));

console.log(makeCoffe());

// Generar una funcion que calcule el area de un rectangulo
//usando parametros por defecto para largo y ancho

const areaRectangulo = (largo = 10, ancho = 2) => largo * ancho

console.log(`El area del triangulo es:  ${areaRectangulo(8, 6)}`);

/* Funcion callback 
*/

 /*
  Pase de datos:
    - Por valor: Se crea una copia independiente del dato. 
      Si modificas la copia, el original NO cambia.
    - Por referencia: Se pasa la dirección de memoria (referencia), 
      no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */

// Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};
console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

//Aplicando funciones de callback

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

// console.log(`Usando incorrectamente la función: ${calculate( 5, 3, "sum")}`); // operationFunction is not a function

// 2. Definimos operaciones básicas
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const sum = (a, b) => a + b;
const division = (a, b) => a / b;
// Crear una función que sume dos números


console.log(`Realizando una resta: ${calculate(5, 3, subtract)}`); // 2
console.log(`Realizando una multiplicación: ${calculate(5, 3, multiply )}`); // 15
// Aplicar a la función calculate la función suma
console.log(`Realizando una suma: ${calculate(5, 3, sum)}`);
console.log(`Realizando una suma: ${calculate(5, 3, division)}`);
// Aplicar una función que calcule el residuo de una devisión, para saber si 6 es divisible entre 3
console.log(`Realizando el modulo: ${calculate(5, 3, division)}`);

console.log(`residuo de 7 entre 3 ${calculate (7,3,(a,b)=> a % b)}`)
var a = 10;
let b  = 20;
const varC = 30;
const varD = 40;
const varE = 50;
const varF = 60;

const cambiarValores =(a, b,c) => {
a = 100;
b = 200;
c = 300;
var d = 400;
let e = 500;
const f = 600;
console.log(a, b, c);
}


console.log("Sesión JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
   
   Analogía: Una cajonera donde cada cajón tiene un número (índice)
   para identificar qué hay dentro.
*/
const myArray = [true, 42, "Hola", null, { nombre: "Juan" }, [1, 2, 3 ]];

// --- 1. Definición ---
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie. Lo que es constante
// es la referencia en memoria, no los datos internos.

const frutas = []; // empty array
const fruits = new Array(); // array using constructor (less common)

const numeros = [ 5 ]; // array with one element
const numbers = new Array(5); // array with 5 empty slots [ <5 empty items> ]

// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento

const techStack = ["HTML", "CSS", "JavaScript"];
console.log (`Accediendo al primer elemento: ${ techStack[0] }`);
// Acceder al primer elemento
console.log( techStack.length ); // 3
// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento:  ${ techStack[1] }` ); //CSS
// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al tercer elemento:  ${ techStack[techStack.length - 1] }` ); // JAVAScript

// --- 3. Modificación de Elementos ---
techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]

techStack[techStack.length ] = "TypeScript";

console.log("Después de la modificación:", techStack);

/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];

// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]

// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]


// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"


// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Despues de agregar con spice", colors.join(" "));
//Agregar dos elementos en el indice 2, sin eliminar otros elementos
colors.splice(2,0, "Rosa", "Cian" );
console.log("Despues de agregar con spice", colors.toString);


// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList = ["Jorge", "Nayeli"];
console.log("Arreglo inicial", guestList.join(" - "));
//Invitado al final
guestList.push("Nancy");
console.log("Despues de agregar un invitado al final", guestList.join(" - "));
//Invitado al inicia
guestList.unshift("Maria");
console.log("Despues de agregar un invitado al inicio", guestList.join(" - "));
//elimina el segindo invitado y agrega otro en su lugar
guestList.splice(1,1, "Jesus");
console.log("Despues de agregar con spice", guestList.join(" - "));

let invitados = ["Jorge", "Nayeli"];

const guestList1 = (invitados) => {
    console.log("Arreglo inicial:", invitados.join(" - "));
    // Invitado al final
    invitados.push("Nancy");
    console.log("Después de agregar un invitado al final:", invitados.join(" - "));
    // Invitado al inicio
    invitados.unshift("Maria");
    console.log("Después de agregar un invitado al inicio:", invitados.join(" - "));
    // Elimina el segundo invitado y agrega otro en su lugar
    invitados.splice(1, 1, "Jesus");
    console.log("Después de agregar con splice:", invitados.join(" - "));
    return invitados;
};


guestList1(invitados);

console.log("Resultados finales:", invitados);


/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.
   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/
// Navegamos a sitios (push)
historyStack = [];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");
console.log("Historial actual:", historyStack);

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)
/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/
/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/
const taskList = [];
//paso 1
taskList.push("Lavar los trastes");
taskList.push("Cocinar");
taskList.push("Lavar la ropa");
//paso 2
console.log("Tareas iniciales:", taskList);//[ 'Lavar los trastes', 'Cocinar', 'Lavar la ropa' ]
//paso 3
const  taskList1= taskList.shift();
console.log("Terminando la primer tarea: ", taskList);
//paso 4
taskList.unshift("Sacar la basura");
//paso 5
console.log("Tareas modificadas:", taskList);
//paso 6
const  taskList2= taskList.shift();
console.log("Terminando tarea importante: ", taskList);

/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================
   Estructuras que repiten un bloque de código mientras una condición sea verdadera.
*/
// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }
// Imprimier los números del 1 al 5
for (let i = 1; i <= 5; i++ ){
    console.log(`Numero ${i}`);
}
// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.
for(let i = 1; i <=10 ; i++ ) {
    if(i === 6) {
        console.log("¡Se alcanzó el número 6");
        break; 
    }
      console.log(`(con break) Número ${i}`);
}
//



let interacion = 0

for ( ; ; ){
    console.log(`Núm de interación: ${interacion}` );
    interacion++;
    if( interacion === 5 ){
        break;
    }
}

// =====================================================
 let jiteration;
for ( jiteration = 0; jiteration < 3; jiteration++ ) {
   console.log("For loop", jiteration ); //
}
console.log("Final", jiteration); //

// =====================================================
let k;
for ( k = 0; k < 5; k++ )         ; //por el punto y coma es decir cierra el ciclo
//y como k aumenta hasta 5 por eso imprime 5
{
   console.log("Valor de", k ); // 5
}
console.log("Final", k); // 5

// --- 2. Ciclo WHILE (Basado en condición) ---
// Úsalo cuando NO sabes cuántas veces se repetirá, depende de algo externo.
// Cuidado: Si la condición nunca es falsa, creas un bucle infinito (Infinite Loop).
/*
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");*/

let i = 0;
while(i <= 5){
    console.log(`Numero ${i}`)
    i++;
}

const countries = ["México", "USA", "Canadá", "Japón"];
// Usando FOR LOOP
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    console.log(`(for) País en indice ${index}; ${element}`);    
}
// Usando For OF (ES6+)
for (const country of countries) {
    console.log(`(for of) País: ${country}`);
}

// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

/*for(let i=0; i<transactions.length; i++){
   totalBalance += transactions[i]
}
console.log("Balnce fina: ", totalBalance)*/
/*i=0;
while(i<transactions.length){
   totalBalance += transactions[i]
   i++;
}
console.log("Balnce fina: ", totalBalance);*/
for (const movimiento of transactions) {
    totalBalance += movimiento
}
console.log("Balnce fina: ", totalBalance);
/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/


// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

let isActive = true;

if (isActive === true) console.log("El usuario esta activo");
if (isActive === true) console.log("El usuario esta activo");


if (isActive === true){ 
    console.log("El usuario esta activo");
}


//Tambien se puede hacer esto, pero solamente en variables booleanas
if (isActive ){ 
    console.log("El usuario esta activo");
}

//Bloque de codigo
//Conjunto de sentencias agrupadas entre {...}
{
    let firtsName = "Juan";
    let lastName = "Perez";
    var alias = "Juampi";
    let age = 22;
    console.log(firtsName + " " + lastName);
    {//Bloque anidado
        //solo toma nayeli morales
        let firtsName = "Nayeli";
        let lastName = "Medina";
        var alias = "Nay";
        //var alias = "Naymo";
        console.log(firtsName, lastName, alias, age);
    }
    console.log(firtsName, lastName, alias, age);
}
// No esta definido firtname, lastname y age
//console.log(firtsName, lastName, alias, age);

console.log(alias);//Nay

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".
 Imprimir el valor del retorno por consola.
*/

const clima = (temperatura) => {
    if (temperatura>25){
    return "Hace calor";
} else{
    return "hace frio";
}
}

console.log(`hoy ${clima(10)}`)

function cambiarEstado(estado) {
    const imagen = document.getElementById("imagenDino");

    if (estado === "feliz") {
        imagen.src = "./public/images/dino.jpg"; // Imagen feliz
    } 
    else if (estado === "triste") {
        imagen.src = "./public/images/dino-emo.png"; // Imagen triste o normal
    }
}

//--------------- Condicional Switch-case --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "super_admin":                   
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("admin") ); // Acceso completo al sistema
console.log( getAccessLevel("super_admin") ); // Acceso completo al sistema
console.log( getAccessLevel("editor") ); // Acceso para editar contenido
console.log( getAccessLevel("customer") ); // Acceso denegado


/*
 Refactorizar la función getWeather usando switch-case
*/

/*
const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
   
}*/
const getWeatherSwitch=(codigo) => {
    let message
     switch ( codigo ) {                  
        case 0:
            message= "Clear Sky";
            break;
        case 1:
        case 2:
        case 3:
            message = "Amainly clear, partly cloudy, and overcast";
            break
        case 45:
        case 48: 
            message = "Fog and depositing rime fog";
            break;
        default:
            message = "Acceso denegado";
    }
    return message;

}
console.log( getWeatherSwitch(1) );

const WeatherSwitch=(codigo) => {
     switch ( codigo ) {                  
        case 0:
            return "Clear Sky";
        case 1:
        case 2:
        case 3:
            return "AMainly clear, partly cloudy, and overcast";
        case 45:
        case 48: 
            return "Fog and depositing rime fog";
        default:
            return "Acceso denegado";
    }
}

console.log( WeatherSwitch(45) );

/*
 Dado un número entero, imprimir:

 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 */
function clasificarNumeroIfElse(numero) {
    if (numero < 0) {
      return "Negativo";
    } else if (numero === 0) {
      return "Cero";
    } else if (numero > 0 && numero < 100) {
      return "Positivo";
    } else {
      return "Grande";
    }
  }
  
  console.log(clasificarNumeroIfElse(-5));   // Negativo
  console.log(clasificarNumeroIfElse(0));    // Cero
  console.log(clasificarNumeroIfElse(50));   // Positivo
  console.log(clasificarNumeroIfElse(100));  // Grande

  // ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande


/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/

const parImpar = (numero) => {
    return numero % 2 === 0 ? "NUMERO PAR" : "NUMERO IMPAR"
}
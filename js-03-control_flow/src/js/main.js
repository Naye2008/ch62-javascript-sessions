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
// Estructura básica de una función:

// function nombreFunction(parameter1,parameter2) {

//     return value;
// }


//? TIPOS DE FUNCIONES:

// Funciones declaradas:
function declaredFunction(params) {
    params++;
    let value = params;
    return value;
}

console.log(declaredFunction(1));

// Funciones de expresión:
const sumar = function(a,b) {
    return a + b;
}

console.log(sumar(5,3));

// Funciones anónimas:
(function () {
    console.log("Esta función se ejecuta inmediatamente")
})();

//? PARÁMETROS:

// Pasar el mismo número de parámetros a la funcion que el número
// definido en la cabecera sería la forma tradicional de los demás
// lenguajes.

// Se puede también utilizar valores predeterminados para los parámetros
// de la siguiente forma:
function muestraMensaje(msg = "No has pasado ningún mensaje como parámetro") {
    alert(msg);
}

muestraMensaje();

// Utilizar el objeto arguments nos permite utilizar un array de indefinidos
// parámetros en nuestra función.
function sumarFunction() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

let resultado = sumarFunction(2,3,5,6,7,1,12,45,6,6,4,3);
console.log(resultado);

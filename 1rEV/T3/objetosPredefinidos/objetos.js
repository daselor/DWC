

//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//?                         OBJETO WINDOW
//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
{

// console.log("Printea en la consola");
// console.log(window.location.href);

// let titulo = document.getElementById("títuloPágina");

// titulo.textContent = "Nuevo título página";

// let nombre = window.prompt("¿Cuál es tu nombre?"); // Sale

// let confirmar = window.confirm("Seguro?");

// if (confirmar) {
//     console.log("Menos mal que te sabes tu nombre");
// } else {
//     console.log("¿De verdad que no te sabes tu nombre?")
// }

}

//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//?                         OBJETO STRING
//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
{

let nombre1 = "Juan";
let saludo = `Hola, ${nombre1}`; // Hay que usar los acentos abiertos
console.log(saludo);

const nombre2 = new String('Federico');
console.log(`Nombre conseguido con constructor String: ${nombre2}`);
console.log(`El Nombre ${nombre2} tiene ${nombre2.length} letras`)

let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(abecedario.charAt(9)); // Devuelve el carácter en la posición 10
console.log(abecedario.charAt(0)); // Prueba para comprobar que la posición 0 es A

let letra = "ñ";
console.log(letra.charCodeAt(0)); // Imprime '165' que es el Unicode de la letra ñ

let frase = "Esta frase contiene la palabra programación";

// indexOff busca la primera aparición de la subcadena
let indice = frase.toLowerCase().indexOf("programación");

// lastIndexOf busca la última aparición de la subcadena
let lastIndice = frase.toLowerCase().lastIndexOf("programación");
if (indice !== -1) {
    console.log(`"programación" está en la posición: ${indice}`);
} else {
    console.log(`"programación" no se encuentra en la frase`);
}

let textoParaRemplazar = "Hola a todos, soy un robot";

// .replace(A, B) reemplaza la subcadena A por la subcadena B
let textoReemplazado = textoParaRemplazar.replace("robot", "humano");
console.log(textoReemplazado);

// .trim() elimina los espacios al principio y al final de la cadena
let textoTrimeable = "       Hola Mundo             ";
console.log(textoTrimeable.trim());

// concat(cadena2, ...)
let nombreConcat = "Julio";
let apellidoConcat = "Buenafuente";
let nombreCompletoConcat = nombreConcat.concat(" ", apellidoConcat);
console.log(nombreCompletoConcat);

//slice(start, end) Extrae una subcadena desde la posición inicial dada y la final

}

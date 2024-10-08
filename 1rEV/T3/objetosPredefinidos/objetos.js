

//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//?                         OBJETO WINDOW
//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// {

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

// }

//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//?                         OBJETO STRING
//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// {

// let nombre1 = "Juan";
// let saludo = `Hola, ${nombre1}`; // Hay que usar los acentos abiertos
// console.log(saludo);

// const nombre2 = new String('Federico');
// console.log(`Nombre conseguido con constructor String: ${nombre2}`);
// console.log(`El Nombre ${nombre2} tiene ${nombre2.length} letras`)

// let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(abecedario.charAt(9)); // Devuelve el carácter en la posición 10
// console.log(abecedario.charAt(0)); // Prueba para comprobar que la posición 0 es A

// let letra = "ñ";
// console.log(letra.charCodeAt(0)); // Imprime '165' que es el Unicode de la letra ñ

// let frase = "Esta frase contiene la palabra programación";

// // indexOff busca la primera aparición de la subcadena
// let indice = frase.toLowerCase().indexOf("programación");

// // lastIndexOf busca la última aparición de la subcadena
// let lastIndice = frase.toLowerCase().lastIndexOf("programación");
// if (indice !== -1) {
//     console.log(`"programación" está en la posición: ${indice}`);
// } else {
//     console.log(`"programación" no se encuentra en la frase`);
// }

// let textoParaRemplazar = "Hola a todos, soy un robot";

// // .replace(A, B) reemplaza la subcadena A por la subcadena B
// let textoReemplazado = textoParaRemplazar.replace("robot", "humano");
// console.log(textoReemplazado);

// // .trim() elimina los espacios al principio y al final de la cadena
// let textoTrimeable = "       Hola Mundo             ";
// console.log(textoTrimeable.trim());

// // concat(cadena2, ...)
// let nombreConcat = "Julio";
// let apellidoConcat = "Buenafuente";
// let nombreCompletoConcat = nombreConcat.concat(" ", apellidoConcat);
// console.log(nombreCompletoConcat);

// //slice(start, end) Extrae una subcadena desde la posición inicial dada y la final
// let textoSlice = "Este texto no importa. Este texto sí que importa";
// let textoSliced = textoSlice.slice(20);
// console.log(textoSliced);

// //split(separator, limit)
// let fraseSplit = "Esta frase se divide por espacios";
// let palabras = fraseSplit.split(" ");
// console.log(palabras); // Imprime un array con las palabras:
// // ["Esta", "frase", "se", "divide", "por", "espacios"]

// let lista = "rojo,verde,azul,amarillo";
// let colores = lista.split(",");
// console.log(colores); // Imprime un array con los colores:
// // ["rojo", "verde", "azul", "amarillo"]

// let cadenaLarga = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
// let partes2 = cadenaLarga.split(" ", 5); // Límite de 5 subcadenas

// let texto = "Hola, mundo!";
// let caracteres = texto.split("");
// console.log(caracteres); // Imprime un array con cada caracter

// }

//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//?                         OBJETO DATE
//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// {

// // Sin argumentos crea un objeto Date con la fecha y hora actual según el reloj del sistema.
// let fechaActual = new Date();
// console.log(fechaActual);

// // Con argumentos numéricos permite crear un objeto Date con una fecha y hora específicos.
// // Orden: Año -> Mes -> Día -> Hora -> Minutos -> Segundos -> Milisegundos.
// let fechaEspecifica = new Date(2004, 0, 10, 10, 30, 15, 300);
// console.log(fechaEspecifica);

// // Con cadena de fecha permite crear un objeto Date a partir de una cadena de texto que 
// // que represente una fecha y hora en un formato específico.
// let fechaCadena = "2024-06-12T10:30:15.500+02:00";
// let fechaObjeto = new Date(fechaCadena);
// console.log(fechaObjeto);

// // El objeto Date cuenta con Getters y Setters. Aquí tienes un ejemplo de cada uno de los
// // Getters y el formato que devuelve.
// {
//     // .getFullYear() Devuelve el año de la fecha como un número entero de cuatro dígitos.
//     let actualYear = fechaActual.getFullYear();
//     console.log(`Estamos en el año ${actualYear}`);
    
//     // .getMonth() Devuelve el mes de la fecha como un número entero de 0 a 11.
//     let actualMonth = fechaActual.getMonth();
//     console.log(`Estamos en el mes ${actualMonth}`);
    
//     // .getDate() Devuelve el día del mes de la fecha como un número entero del 1 al 31.
//     let actualDay = fechaActual.getDate();
//     console.log(`Estamos a día ${actualDay}`);
    
//     // .getHours() Devuelve la hora de la fecha como un número entero del 0 al 23
//     let actualHour = fechaActual.getHours();
//     console.log(`Son las ${actualHour}`);
    
//     // .getMinutes() Devuelve los minutos de la fecha como un número entero del 0 al 59
//     let actualMinutes = fechaActual.getMinutes();
//     console.log(`con ${actualMinutes} minutos`);
    
//     // .getSeconds() Devuelve los segundos de la fecha como un número entero del 0 al 59
//     let actualSeconds = fechaActual.getSeconds();
//     console.log(`y ${actualSeconds} segundos.`);

//     // .getMilliseconds(): Devuelve los milisegundos de la fecha como un número entero 
//     // de 0 a 999.
//     let actualMilisegundos = fechaActual.getMilliseconds();
//     console.log(`Milisegundos actuales: ${actualMilisegundos}`);
    
// }   

// }

//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//?                     OBJETO NUMBER Y MATH
//? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
{


}
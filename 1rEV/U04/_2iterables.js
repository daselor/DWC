//?                            ARRAYS
//?  ................................................................

//* Literal de array:
const arrayLiteral = ["manzana", "pera", "uva"];
const arrayLiteralMixto = ["manzana", 12, true, {key: "value"}];

//* Constructor de array
const arrayCtor = new Array("manzana", "pera", "uva");
const arrayCtorMixto = new Array("pera", 33, true, {key: "value"})
console.log(arrayCtorMixto);
console.log(arrayLiteralMixto);

//* Propiedades y métodos de arrays

// .push(elemento) Agrega un nuevo elemento al final del array.
arrayCtor.push("bombón");


// .pop() Elimina el último elemento del array y lo devuelve.
console.log(arrayCtor.pop());
console.log(...arrayCtor);

// .shift() Elimina el primer elemento del array y lo devuelve.
console.log(arrayCtor.shift());
console.log(...arrayCtor);

// .unshift(elemento) Agrega un nuevo elemento al principio del array.
arrayCtor.unshift("mango");

// .splice(beginIndex, countDelete, element0, element1...)
// Elimina elementos del array y agrega nuecos elementos.
arrayLiteralMixto.splice(1, 2, 44, false);
console.log(arrayLiteralMixto);

// ..................................................................

//* Funciones de callback

// Forma tradicional:
let lista = [1, 2, 3, 4, 5];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);    
}

// Usando callback:
lista.forEach(function(e) {console.log(e);})





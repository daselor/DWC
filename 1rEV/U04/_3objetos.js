//?                      CREACIÓN DE OBJETOS
//?  ................................................................
//* Literal de objeto:
const persona = {
    nombre: "Pablo",
    apellido: "Picasso",
    edad: "Demasiada",
    ciudad: "Cementerio"
};

//* Constructor de objetos:
const personaObject = new Object();
personaObject.nombre = "María";
personaObject.apellido = "Martínez";
personaObject.edad = 25;
personaObject.ciudad = "Valencia";

//?               ACCESO A PROPIEDADES DE UN OBJETO
//?  ................................................................

//* Notación con punto
const nombrePersona = persona.nombre;

//* Notación en corchetes:
const propiedad = "edad";
const edadPersona = persona[propiedad];

alert(persona.padre); // Devuelve undefined
alert("padre" in persona); // Ambas funcionan para saber si la propiedad existe
// pero la diferencia es que si la propiedad tiene como valor "undefined" no
// se puede saber utilizando el primer método.

console.log(persona.cp);
persona.cp = 46920;
console.log(persona.cp);

// El bucle "for... in"
for (const key in persona) {
    console.log(`${key}: ${persona[key]}`);
}

// La comparación de objetos no dará igual si una propiedad se encuentra desordenada.
const persona1 = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    ciudad: "Valencia"
    };
const persona2 = {
    ciudad: "Valencia",
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30
    };
console.log(persona1==persona2)


//?                     MÉTODOS DE LOS OBJETOS
//?  ................................................................

const personaMethodic = {
    nombre: "Juan",
    apellido: "Pérez",
    ciudad: "Valencia",
    edad: 30,

    // Método "obtenerNombreCompleto"
    obtenerNombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

const nombreCompleto = personaMethodic.obtenerNombreCompleto();
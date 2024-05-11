// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     esEstudiante: true,
//    };
// console.log(persona);


// function Persona(nombre, edad, esEstudiante) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.esEstudiante = esEstudiante;
//    }
// const persona1 = new Persona('Juan', 30, true);
// console.log(persona1.nombre);


// const persona = {
//     nombre: '',
//     edad: 0,
//     esEstudiante: false
//    };
// const persona1 = Object.create(persona);
// persona1.nombre = 'Felix';
// persona1.edad = 30;
// console.log(persona1.nombre);
// console.log(persona1.edad);


class Persona{
    constructor(nombre, edad, telefono){
        this._nombre= nombre;
        this._edad= edad;
        this._telefono= telefono;
    }

    presentacion(){
        return console.log(`Hola, mi nombre es: ${this._nombre}, tengo la edad de:  ${this._edad} y mi telefono es: ${this._telefono}`);
    }
    hablarIdioma(){
        return console.log(`Hola soy ${this._nombre} y hablo español`);
    }
}

let persona1 = new Persona("Oscar",22,75245147)
let persona2 = new Persona("Melany",20,75245147)
persona1.presentacion()
persona2.hablarIdioma()
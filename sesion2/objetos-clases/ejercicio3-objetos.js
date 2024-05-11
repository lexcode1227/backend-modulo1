// DESARROLLAR UN ALGORITMO QUE PERMITA MOSTRAR EL IMC DE UNA
// PERSONA, UTILIZANDO UN METODO MOSTRAR LA RESPUESTA SEGÚN LOS
// DATOS QUE SOLICITA LA FORMULA.
// FORMULA --> IMC = PESO(kg) / ALTURA (metros)

class Persona{
    constructor(nombre, edad, peso, altura){
        this._nombre= nombre;
        this._edad= edad;
        this._peso= peso;
        this._altura= altura;
    }

    calcularIMC(){
        let respuesta = (this._peso / (this._altura * this._altura));
        return console.log(`Hola, mi nombre es: ${this._nombre} y mi IMC es: ${respuesta}`);
    }
}

let oscar = new Persona("Oscar",22,90,1.80);
oscar.calcularIMC()
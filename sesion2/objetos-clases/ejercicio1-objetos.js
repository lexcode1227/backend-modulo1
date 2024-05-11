// MUESTRE EN UNA TERMINAL LOS COMPORTAMIENTOS DE UN BEBE COMO
// • LLORAR
// • DORMIR
// • COMER
// LOS COMPORTAMIENTOS DEBEN DE INCLUIR SOLO UN MENSAJE CON LOS
// ATRIBUTOS CORRESPONDIENTES PARA EL BEBE (ANTONIO, DE 3 MESES,
// SONIA DE 5 MESES Y JAVIER DE 8 MESES).

class Bebe{
    constructor(nombre, edad){
        this._nombre= nombre;
        this._edad= edad;
    }

    llorar(){
        return console.log(`Mi nombre es: ${this._nombre}, tengo ${this._edad} meses de edad y ahorita estoy llorando`);
    }
    dormir(){
        return console.log(`Mi nombre es: ${this._nombre}, tengo ${this._edad} meses de edad y ahorita estoy durmiendo`);
    }
    comer(){
        return console.log(`Mi nombre es: ${this._nombre}, tengo ${this._edad} meses de edad y ahorita estoy comiendo`);
    }
}

let antonio = new Bebe("Antonio",6)
let sonia = new Bebe("Sonia",11)
let javier = new Bebe("Javier",3)
antonio.llorar()
sonia.dormir()
javier.comer()
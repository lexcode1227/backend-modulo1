// DESAROLLE UN ALGORITMO QUE LE PERMITA MOSTRAR LA HORA ACTUAL EN
// UN MENSAJE, PARA ESTE EJERCICIO DEBERA DE DECLARAR LA INSTANCIA
// FECHA PARA UNA NEW DATE() Y LAS VARIABLES RECEPTORAS DE LA HORA
// (HORA, MINUTOS Y SEGUNDOS) SOLICITARLO LOS DATOS CON .GETHOURS(),
// .GETMINUTES Y .GETSECONDS.

// let fecha = new Date()
// let hora = fecha.getHours()
// let minutos = fecha.getMinutes()
// let segundos = fecha.getSeconds()
// console.log(`La hora actual es: ${hora}:${minutos}:${segundos}`);

class Reloj{
    constructor(){
        this._fecha= new Date();
    }
    mostrarHora(){
        let hora = this._fecha.getHours();
        let minutos = this._fecha.getMinutes();
        let segundos = this._fecha.getSeconds();

        console.log(`La hora actual es: ${hora}:${minutos}:${segundos}`);
    }
}

const horaActual = new Reloj;
horaActual.mostrarHora();
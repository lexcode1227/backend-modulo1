const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// ALGORITMO QUE PUEDA EJECUTAR TODOS LOS EJERCICIOS CON UN MENU DE SELECCIÓN NUMERICA Y AL FINALIZAR EL EJERCICIO VOLVER AL MENU A MODO DE QUE EL PROGRAMA NO SE CIERRE.

function MenuInicio(){
    console.log("Seleccione una opción:");
    console.log("1. Determinar si un número es positivo, negativo o cero.");
    console.log("2. Calcular el mayor de 3 números.");
    console.log("3. Calcular el factorial de un número.");
    console.log("4. Determinar si un número es par o impar.");
    console.log("5. Mezclar colores primarios.");
    console.log("6. Determinar nombre del mes.");
    console.log("7. Determinar tipo de vehículo.");

    rl.question("Seleccione el numero del programa a ejecutar: ", (nPrograma)=>{
        switch (parseInt(nPrograma)) {
            case 1:
                console.log("Ejecutando programa #1");
                console.log("-------------------------------------------");
                ejercicio1()
                break;
            case 2:
                console.log("Ejecutando programa #2");
                console.log("-------------------------------------------");
                ejercicio2()
                break;
            case 3:
                console.log("Ejecutando programa #3");
                console.log("-------------------------------------------");
                ejercicio3()
                break;
            case 4:
                console.log("Ejecutando programa #4");
                console.log("-------------------------------------------");
                ejercicio4()
                break;
            case 5:
                console.log("Ejecutando programa #5");
                console.log("-------------------------------------------");
                ejercicio5()
                break;
            case 6:
                console.log("Ejecutando programa #6");
                console.log("-------------------------------------------");
                ejercicio6()
                break;
            case 7:
                console.log("Ejecutando programa #7");
                console.log("-------------------------------------------");
                ejercicio7()
                break;
            case 8:
                console.log("Saliendo del programa");
                rl.close()
                break;
            default:
                console.log("Saliendo del programa");
                rl.close()
                break;
        }
    })
}

MenuInicio()

function ejercicio1(){
    rl.question("Ingrese un número: ", (numero)=> {
    if (numero >= 1) {
        console.log(`El número que ingresaste:${numero} es positivo`);
        console.log("-------------------------------------------");
        MenuInicio()
        return
    } else if (numero < 0){
        console.log(`El número que ingresaste:${numero} es negativo`);
        console.log("-------------------------------------------");
        MenuInicio()
        return
    } else {
        MenuInicio()
        console.log(`El número que ingresaste:${numero} es cero`);
        console.log("-------------------------------------------");
        MenuInicio()
        return
    }
})
}

function ejercicio2(){
    function calcularMayor(numero1,numero2, numero3){
        if ((parseFloat(numero1) > parseFloat(numero2) && parseFloat(numero1) > parseFloat(numero3))) {
            console.log(`El numero mayor es el primer numero: ${numero1}`);
            console.log("-------------------------------------------");
            MenuInicio()
            return
        } else if (parseFloat(numero2) > parseFloat(numero1) && parseFloat(numero2) > parseFloat(numero3)) {
            console.log(`El numero mayor es el segundo numero: ${numero2}`);
            console.log("-------------------------------------------");
            MenuInicio()
            return
        } else if (parseFloat(numero3) > parseFloat(numero1) && parseFloat(numero3) > parseFloat(numero2)){
            console.log(`El numero mayor es el tercero numero: ${numero3}`);
            console.log("-------------------------------------------");
            MenuInicio()
            return
        } else {
            console.log(`Los numeros ingresados son iguales`);
            console.log("-------------------------------------------");
            MenuInicio()
            return
        }
    }

rl.question("Ingrese el primer numero: ", (numero1)=>{
    rl.question("Ingrese el segundo numero: ", (numero2)=>{
        rl.question("Ingrese el tercer numero: ",(numero3)=>{
            calcularMayor(numero1, numero2, numero3)
        })
    })
})
}

function ejercicio3(){
    rl.question("digite el numero a realizar el factorial: ", (n1)=> {
        let resultado = 1
        for (let i = 1; i <=parseFloat(n1); i++) {
            resultado *= i;
        }
        console.log("el factorial de " + n1 +" es: " +resultado );
        console.log("-------------------------------------------");
        MenuInicio()
    })
}

function ejercicio4(){
    rl.question("Ingrese el numero a evaluar: ", (num)=> {
        if (parseFloat(num) % 2 === 0) {
            console.log("El numero es par");
        } else {
            console.log("El numero es impar");
        }
        console.log("-------------------------------------------");
        MenuInicio()
    })
}

function ejercicio5(){
    rl.question("Ingrese el primer color: ", (color1)=>{
    rl.question("Ingrese el segundo color: ", (color2)=>{
        if (color1 === "azul" && color2 === "amarillo") {
            console.log("La mezcla genera el color verde");
            console.log("-------------------------------------------");
            MenuInicio()
        } else if(color1 === "azul" && color2 === "rojo"){
            console.log("La mezcla genera el color morado");
            console.log("-------------------------------------------");
            MenuInicio()
        } else if(color1 === "rojo" && color2 === "amarillo"){
            console.log("La mezcla genera el color morado");
            console.log("-------------------------------------------");
            MenuInicio()
        } else {
            console.log("La combinacion no se encuentra");
            console.log("-------------------------------------------");
            MenuInicio()
        }
    })
})
}

function ejercicio6(){
    rl.question("Digite el numero de mes a conocer: ", (nMes)=>{
    let nombreMes
    switch (parseInt(nMes)) {
        case 1:
        nombreMes = "Enero"
        break;
        case 2:
        nombreMes = "Febrero"
        break;
        case 3:
        nombreMes = "Marzo"
        break;
        case 4:
        nombreMes = "Abril"
        break;
        case 5:
        nombreMes = "Mayo"
        break;
        case 6:
        nombreMes = "Junio"
        break;
        case 7:
        nombreMes = "Julio"
        break;
        case 8:
        nombreMes = "Agosto"
        break;
        case 9:
        nombreMes = "Septiembre"
        break;
        case 10:
        nombreMes = "Octubre"
        break;
        case 11:
        nombreMes = "Noviembre"
        break;
        case 12:
        nombreMes = "Diciembre"
        break;
        default:
        nombreMes = "Este mes no existe"
        break;
    }
    console.log(nombreMes);
    console.log("-------------------------------------------");
    MenuInicio()
})
}

function ejercicio7(){
    rl.question("Digite la categoria del vehiculo: ",(categoria)=>{
        let tipoDeVehiculo;
        switch (categoria) {
            case "Moto":
            tipoDeVehiculo = "Motocicleta"
            break;
            case "Auto":
            tipoDeVehiculo = "Automovil"
            break;
            case "Camion":
            tipoDeVehiculo = "Super Camion"
            break;
            case "Bicicleta":
            tipoDeVehiculo = "Super Bicicleta"
            break;
            default:
            tipoDeVehiculo = "La categoria digitada no existe"
            break;
        }
        console.log(tipoDeVehiculo);
        console.log("-------------------------------------------");
        MenuInicio()
    })
}

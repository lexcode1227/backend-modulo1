const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// EJERCICIOS DE LA GUIA DEL 1 - 7

// // 1. Determinar si un número ingresado por el usuario es positivo, negativo o si es cero.
// rl.question("Ingrese un número ", (numero)=> {
//     if (numero >= 1) {
//         rl.close()
//         return console.log(`El número que ingresaste:${numero} es positivo`);
//     } else if (numero < 0){
//         rl.close()
//         return console.log(`El número que ingresaste:${numero} es negativo`);
//     } else {
//         rl.close()
//         return console.log(`El número que ingresaste:${numero} es cero`);
//     }
// })

// // Implementadolo con una funcion
// function evaluar (num){
//     if (numero >= 1) {
//         rl.close()
//         return console.log(`El número que ingresaste:${numero} es positivo`);
//     } else if (numero < 0){
//         rl.close()
//         return console.log(`El número que ingresaste:${numero} es negativo`);
//     } else {
//         rl.close()
//         return console.log(`El número que ingresaste:${numero} es cero`);
//     }
// }

// // 2. Calcular el mayor de 3 números ingresados por el usuario. - implementando funcion

// function calcularMayor(numero1,numero2, numero3){
//     if ((parseFloat(numero1) > parseFloat(numero2) && parseFloat(numero1) > parseFloat(numero3))) {
//         rl.close()
//         return console.log(`El numero mayor es el primer numero: ${numero1}`);
//     } else if (parseFloat(numero2) > parseFloat(numero1) && parseFloat(numero2) > parseFloat(numero3)) {
//         rl.close()
//         return console.log(`El numero mayor es el segundo numero: ${numero2}`);
//     } else if (parseFloat(numero3) > parseFloat(numero1) && parseFloat(numero3) > parseFloat(numero2)){
//         rl.close()
//         return console.log(`El numero mayor es el tercero numero: ${numero3}`);
//     } else {
//         rl.close()
//         return console.log(`Los numeros ingresados son iguales`);
//     }
// }

// rl.question("Ingrese el primer numero: ", (numero1)=>{
//     rl.question("Ingrese el segundo numero: ", (numero2)=>{
//         rl.question("Ingrese el tercer numero: ",(numero3)=>{
//             calcularMayor(numero1, numero2, numero3)
//         })
//     })
// })

// 3. Calcular la factorial de un número !, el factorial es ir multiplicando el resultado * la posición del número. El estado inicia es 1.



// // 4. Determinar si un numero es par o es impar.
// rl.question("Ingrese el numero a evaluar", (num)=>{
    
// })

// // 5. Crear un algoritmo donde se evalúa el tipo de color que saldrá de una mezcla de colores primarios. 
// // Colores primarios: rojo, amarillo y azul. Las combinaciones que el algoritmo evalúa son las siguientes:
//     // • Azul y amarillo = verde
//     // • Azul y rojo = morado
//     // • Rojo y amarillo = naranja
//     // • Si se usa otra combinación de colores arrojar una alerta de error.

// rl.question("Ingrese el primer color: ", (color1)=>{
//     rl.question("Ingrese el segundo color: ", (color2)=>{
//         if (color1 === "azul" && color2 === "amarillo") {
//             console.log("La mezcla genera el color verde");
//         } else if(color1 === "azul" && color2 === "rojo"){
//             console.log("La mezcla genera el color morado");
//         } else if(color1 === "rojo" && color2 === "amarillo"){
//             console.log("La mezcla genera el color morado");
//         } else {
//             console.log("La combinacion no se encuentra");
//         }
//     })
// })


// // 6. Determinar el nombre del mes según el número ingresado por el usuario, tomar en cuenta que los números va 1= Enero, 2=Febrero… etc.

// rl.question("Digite el numero de mes a conocer: ", (nMes)=>{
//     let nombreMes
//     switch (parseInt(nMes)) {
//         case 1:
//         nombreMes = "Enero"
//         break;
//         case 2:
//         nombreMes = "Febrero"
//         break;
//         case 3:
//         nombreMes = "Marzo"
//         break;
//         case 4:
//         nombreMes = "Abril"
//         break;
//         case 5:
//         nombreMes = "Mayo"
//         break;
//         case 6:
//         nombreMes = "Junio"
//         break;
//         case 7:
//         nombreMes = "Julio"
//         break;
//         case 8:
//         nombreMes = "Agosto"
//         break;
//         case 9:
//         nombreMes = "Septiembre"
//         break;
//         case 10:
//         nombreMes = "Octubre"
//         break;
//         case 11:
//         nombreMes = "Noviembre"
//         break;
//         case 12:
//         nombreMes = "Diciembre"
//         break;
//         default:
//         nombreMes = "Este mes no existe"
//         break;
//     }
//     rl.close()
//     console.log(nombreMes);
// })

// // 7. Determinar el tipo de vehículo seleccionado según la categoría que se ingrese, las categorías son las siguientes: Moto, Auto, Camion y Bicicleta.

// rl.question("Digite la categoria del vehiculo: ",(categoria)=>{
//     let tipoDeVehiculo;
//     switch (categoria) {
//         case "Moto":
//         tipoDeVehiculo = "Motocicleta"
//         break;
//         case "Auto":
//         tipoDeVehiculo = "Automovil"
//         break;
//         case "Camion":
//         tipoDeVehiculo = "Super Camion"
//         break;
//         case "Bicicleta":
//         tipoDeVehiculo = "Super Bicicleta"
//         break;
//         default:
//         tipoDeVehiculo = "La categoria digitada no existe"
//         break;
//     }
//     rl.close()
//     console.log(tipoDeVehiculo);
// })




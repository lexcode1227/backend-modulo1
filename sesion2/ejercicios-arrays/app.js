// // 1. Crea una función que reciba un arreglo de cadenas de texto y cuente cuántas veces aparece cada palabra en todas las cadenas.

// function contarPalabras(arr){
//     let contadorPalabras = {};
//     arr.forEach(cadena => {
//         let palabras = cadena.split(/\s+/);
//         palabras.forEach(palabra => {
//             if (contadorPalabras[palabra]) {
//                 contadorPalabras[palabra]++;               
//             } else {
//                 contadorPalabras[palabra]=1;
//             }
//         })
//     });
//     return contadorPalabras;
// }
// let palabrasArray= ["Hola buenos dias", "Hola buenas tardes", "Hola buenas noches"];
// let resultado = contarPalabras(palabrasArray);
// console.log(resultado);


// // 2. Define un objeto que represente un producto con propiedades como nombre, precio y cantidad. Luego, calcula el costo total multiplicando el precio por la cantidad para varios productos y sumando los resultados.
// let productoA = {
//     nombre: "Camisa",
//     precio: 25,
//     cantidad: 5,
// }
// let productoB = {
//     nombre: "Jeans",
//     precio: 40,
//     cantidad: 3,
// }

// let costoTotalProductoA = productoA.precio * productoA.cantidad
// let costoTotalProductoB = productoB.precio * productoB.cantidad
// let costoTotal = costoTotalProductoA + costoTotalProductoB

// console.log(costoTotalProductoA);
// console.log(costoTotalProductoB);
// console.log(costoTotal);


// // 3. Toma un arreglo de objetos que representen personas con propiedades como nombre, edad y ciudad, y filtra las personas mayores de 30 años que viven en una ciudad específica.
// let personas = [
//     {nombre: "Sergio", edad: 33, ciudad: "San Salvador"},
//     {nombre: "Martha", edad: 35, ciudad: "San Salvador"},
//     {nombre: "Marleni", edad: 50, ciudad: "San Tecla"},
//     {nombre: "Sonia", edad: 25, ciudad: "San Miguel"},
// ]

// function filtrarPersonas(personasObj, ciudad){
//     return personasObj.filter(persona => persona.edad > 30 && persona.ciudad === ciudad)
// }
// let personasFiltradas = filtrarPersonas(personas, "San Salvador")
// console.log(personasFiltradas);


// // 4. Dado un arreglo de números, crea una nueva lista con los cuadrados de cada número utilizando el método map().

// let numeros = [2,5,6,9,12];

// let cuadradosNewArr = numeros.map(numero => numero**2)
// console.log(numeros, "numeros multiplicados", cuadradosNewArr);

// // 5. Toma un arreglo de números y utiliza una iteración para sumar únicamente los números pares.
// let arreglo = [1,2,3,4,5,6,7,8,9,10];
// let sumaPares = 0;
// for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] % 2 === 2) {
//         sumaPares += arreglo[i];   
//     }    
// }
// console.log(sumaPares);

// // 6. Crea una función que reciba un arreglo de objetos con propiedades como nombre, edad y género, y busque un objeto específico por nombre.
// let personas = [
//     {nombre: "Sergio", edad: 33, ciudad: "San Salvador"},
//     {nombre: "Martha", edad: 35, ciudad: "San Salvador"},
//     {nombre: "Marleni", edad: 50, ciudad: "San Tecla"},
//     {nombre: "Sonia", edad: 25, ciudad: "San Miguel"},
// ]

// function buscarPorNombre(arrayPersona, nombre){
//     return arrayPersona.find(obj => obj.nombre === nombre)
// }
// let personasFiltradas = buscarPorNombre(personas, "San Salvador")
// console.log(personasFiltradas);

// // 7. Ordena un arreglo de objetos según una propiedad específica, como la edad o el precio.

// let personas = [
//     {nombre: "Sergio", edad: 26, ciudad: "San Salvador"},
//     {nombre: "Martha", edad: 23, ciudad: "San Salvador"},
//     {nombre: "Marleni", edad: 25, ciudad: "San Tecla"},
//     {nombre: "Sonia", edad: 30, ciudad: "San Miguel"},
// ]

// let personasOrdenadas = personas.sort((a,b)=> a.edad - b.edad)
// console.log(personasOrdenadas);

// 8. Crea una función que valide si un objeto tiene todas las propiedades requeridas, como nombre, dirección y teléfono.

function validarObjeto (objeto) {
    const propiedades = ["nombre", "direccion", "telefono" ]
    for (let propiedad of propiedades) {
        if (objeto.hasOwnProperty(propiedad)) {
            let res = "Objeto aprobado";
            return res
        } else {
            res = "Objeto rechazado";
            return res
        };
    };
};

// let cliente = {nombre: "Henry", direccion: "San Salvador"}
let cliente = {nombre: "Henry", direccion: "San Salvador", telefono: 71727374}
console.log(validarObjeto(cliente));

// // 9. Dado un objeto que representa una lista de compras con elementos y cantidades, genera una lista legible para el usuario mostrando cada elemento y su cantidad.

// let listaCompras = {
//     "manzanas": 5,
//     "platanos": 3,
//     "elotes": 2,
//     "pan": 1,
// }

// function generarListaCompra (listaCompras){
//     let listaLegible = "Lista de compras: \n"

//     for ( let e in listaCompras){
//         listaLegible += `${e} : ${listaCompras[e]} unidades \n`
//     }
//     return listaLegible
// }

// let lista = generarListaCompra(listaCompras)
// console.log(lista);

// // 10. Toma dos arreglos de objetos que representen listas de estudiantes y profesores, y crea una nueva lista combinada con todos los miembros de la comunidad educativa

// let estudiantes = [
//     {nombre: "Grecia", edad: 20},
//     {nombre: "Luis", edad: 22},
//     {nombre: "Anderson", edad: 21},
// ]
// let profesores = [
//     {nombre: "Juan", materia: "Matematica"},
//     {nombre: "Medardo", materia: "Lenguaje"},
//     {nombre: "Antonio", materia: "Ciencias"},
// ]

// function combinarObj(estudiantes, profesores){
//     let comunidadEducativa = [...estudiantes, ...profesores]
//     return comunidadEducativa
// }

// console.log(combinarObj(estudiantes, profesores));

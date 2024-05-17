// 1. Callback básico: Crea una función saludar(callback) que tome un nombre como argumento y llame al callback con un saludo usando ese nombre.

function saludar(nombre, callback){
   const saludo = `Hola, ${nombre}`
   callback(saludo)
}

function mostrar(saludo){
    console.log(saludo);
}

saludar("Henry", mostrar)

// 2. Promesa simple: Crea una función multiplicarPromise(a, b) que devuelva una promesa que resuelva el resultado de la multiplicación de a y b.

function multiplicarPromise (a, b){
    return new Promise((resolve, reject) => {
        const resultado = a * b;
        if (isNaN(resultado)) {
            reject(' ERROR: NO HAY ARGUMENTOS VÁLIDOS')
        } else {
            resolve(resultado)
        }
    })
}

multiplicarPromise(2,3)
    .then((resultado)=> {
        console.log(resultado);
    })
    .catch((error)=> {
        console.log(error);
    })

// 3. Callback anidado: Modifica la función de multiplicación para que acepte un callback como tercer argumento y llame al callback con el resultado.

function multiplicar(a,b, callback){
    const resultado = a * b;
    callback(resultado);
}

multiplicar(6,3, (resultado)=>{
    console.log(`Respuesta: ${resultado}`);
})

// 4. Promesa con retraso: Crea una función retrasarPromesa(ms) que devuelva una promesa que se resuelva después de un cierto tiempo especificado en milisegundos.

function retrasarPromesa(milisegundos){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(`La promesase ha devuelto en ${milisegundos} milisegundos`)
        }, milisegundos)
    })
}
retrasarPromesa(2000)
    .then((mensaje)=> {
        console.log(mensaje);
    })


// 5. Ejecución asincrónica: Utiliza setTimeout dentro de una función para simular una operación asincrónica y llamar a un callback una vez que se complete.
function operacionAsync(callback) {
    setTimeout(() => {
        callback('operacion async completada')
    }, 2000);
}

operacionAsync((mensaje) => {
    console.log(mensaje);
})


// 6. Promesa encadenada: Crea una cadena de promesas donde cada una dependa del resultado de la anterior, realizando operaciones diferentes en cada paso.
function paso1() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(5)
            console.log("paso 1 funcionando");
        }, 5000)
    })
}

function paso2(num) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(num * 2)
            console.log("paso 2 funcionando");
        }, 5000)
    })
}

function paso3(num) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(num + 2)
            console.log("paso 3 funcionando");
        }, 5000)
    })
}

paso1()
.then(paso2)
.then(paso3)
.then((resultado)=> {
    console.log('resultado final es',resultado );
})  

// 7. Callback con error: Crea una función dividir(callback) que tome dos números como entrada y llame al callback con el resultado de la división, manejando el caso de división por cero.
function dividir(a, b, callback) {
    if(b=== 0){
        callback('Error: no se puede dividir entre 0')
    }else{
        const resultado = a/b
        callback(null, resultado)
    }
}

dividir(10,2,(error, resultado)=>{
    if(error){
        console.error(error);
    }else{
        console.log('su resultado es', resultado);
    }
})

// 8. Promesa con error: Modifica la función de división para que devuelva una promesa y rechace con un mensaje de error si se intenta dividir por cero.
function dividir(a, b) {
    return new Promise((resolve, reject)=>{
        if(b=== 0){
            reject('Error: no se puede dividir entre 0')
        }else{
            const resultado = a/b
            resolve(resultado)
        }
    })
}

dividir(10,3)
    .then((resultado)=>{
        console.log('su resultado es:', resultado);

    })
    .catch((error)=>{
        console.log(error);
    })

// 9. Ejecución paralela: Crea un conjunto de funciones asincrónicas y ejecútalas en paralelo utilizando promesas o callbacks, luego maneja los resultados una vez que todas hayan terminado.
function tarea1() {
    return new Promise((resolve) => {
        setTimeout(()=>
        resolve('tarea 1 completada'))
    }, 1000);
    
}

function tarea2() {
    return new Promise((resolve) => {
        setTimeout(()=>
        resolve('tarea 2 completada'))
    }, 2000);
    
}

function tarea3() {
    return new Promise((resolve) => {
        setTimeout(()=>
        resolve('tarea 3 completada'))
    }, 7000);
    
}

Promise.all([tarea1(), tarea2(), tarea3()])
.then((resultado)=>{
    console.log('tareas completadas correctamente');
    resultado.forEach((resultado)=> {
        console.log(resultado);
    })
})
.catch((error)=>{
    console.error('error', error);
})

// 10. Promesa combinada: Combina varias promesas utilizando Promise.all para esperar a que todas se resuelvan antes de ejecutar una acción final.
function tarea1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('tarea 1 completada');
      }, 1000);
    });
  }
  
  function tarea2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('tarea 2 completada');
      }, 2000);
    });
  }
  
  function tarea3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('tarea 3 completada');
      }, 7000);
    });
  }
  
  Promise.all([tarea1(), tarea2(), tarea3()])
    .then((resultados) => {
      console.log('tareas completadas correctamente');
      resultados.forEach((resultado) => {
        console.log(resultado);
      });
      console.log("acción final completada");
    })
    .catch((error) => {
      console.error('error', error);
    });
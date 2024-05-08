const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra que desea reemplazar', (palabraCambiar) => {
        rl.question('Ingrese la palabra nueva', (nuevaPalabra, ()=> {
            const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'gi',), nuevaPalabra)
            console.log('Frase modificada ', fraseModificada);
            rl.close()
        }))
    })
})
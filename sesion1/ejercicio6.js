const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase: ', (frase)=> {
    const palabras = frase.split(' ');
    console.log(`Números de palabras: ${palabras.length}`);
    rl.close()
})
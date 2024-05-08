const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una palabra: ', (palabra)=> {
    const palabraInvertida = palabra.split('').reverse().join('');
    if (palabra === palabraInvertida) {
        console.log(`${palabra} es un palindromo`);
    } else {
        console.log(`${palabra} no es un palindromo`);
    }
})
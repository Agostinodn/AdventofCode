const fs = require('fs')
const input = fs.readFileSync('./demo.txt').toString().split('\n');


let numeri_estratti = input[0].split(',').map(numeroEstratto => +numeroEstratto);
console.log(numeri_estratti);

let cartelle = [];
let righe = []

input.map(valori => {
    console.log(valori.split(' '));
    if(valori.length == '') {
        righe.push(valori)
        console.log('inizia una nuova scheda')
    };
});

console.log(righe);
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const demo = fs.readFileSync('./demo.txt').toString().split('\n');

let posizioneOrizzontale = 0;
let profondita = 0;
let aim = 0;

input.forEach(element => {
    const valore = +element.match(/\d+/g);
    if (element.includes('forward')) {
        posizioneOrizzontale += valore;
        profondita += (aim * valore);
    };
    if (element.includes('up')) {
        aim -= valore;
    };
    if (element.includes('down')) {
        aim += valore;
    };
});
console.log( posizioneOrizzontale * profondita);

const fs = require('fs')
// demo
const input = fs.readFileSync('./input.txt').toString().split('\n');

let rigaLength = input[0].length;
let colonnaLenght = input.length;
let colonna = [];
let gamma = '';
let epsilon = '';
let mag;

for(let posizione = 0; posizione<rigaLength; posizione++){
    for(let pos=0; pos < colonnaLenght; pos++){
        colonna.push(input[pos].charAt(posizione));
        let count0 = (colonna.toString().match(/0/g) || []).length;
        let count1 = colonna.length - count0;
        mag = count1 > count0 ? 1 : 0;
  }
  gamma += mag;
  epsilon += mag == 0 ? 1 : 0;
  colonna = [];
}
console.log('gamma',gamma, '---decimale--->' ,parseInt(+gamma,2));
console.log('epsiolon',epsilon,'---decimale--->', parseInt(+epsilon,2));
console.log('power', parseInt(+gamma,2) * parseInt(+epsilon,2));
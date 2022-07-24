
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('\n');
const input2 = fs.readFileSync('./input.txt').toString().split('\n');
const demo = fs.readFileSync('./demo.txt').toString().split('\n');

let colonna = [];
let gamma = [];
let epsilon = [];
let count = 0;
let countZero = 0;
let countUno = 0;

for(let i = 0; i<demo[0].length; i++){
    for(let y=0; y < demo.length; y++){
        colonna.push(demo[y].charAt(i));
        count = colonna.filter(zero => zero === 0).length;
        countZero = count;
        console.log(countZero);
        countUno = demo.length - countZero;
  }
    gamma.push(countZero > countUno ? 0 : 1);
    epsilon.push(countZero > countUno ? 1 : 0);
    colonna = [];
}

console.log(gamma);
console.log(epsilon);

    //     // CONTO LE OCCORRENZE DI UNO E ZERI 
    //     let count0 = (colonna.match(/0/g) || []).length;
    //     let count1 = colonna.length - count0

    //     console.log(count0);
    //     // CONFRONTO SE CI SONO PIU 1 O 0
    //     let mag = count1 > count0 ? 1 : 0;
    //     console.log(mag);
    //     gamma += mag;
    //     console.log(gamma);
    


// const occurencies = [[],[]]

// for (const i of input) {
//   const vals = i.split('')
//   for (const pos in vals) {
//     const val = vals[pos]
//     if(!occurencies[val][pos]) occurencies[val][pos] = 0
//     occurencies[val][pos]++
//   }
// }
// let gamma = ''
// let epsilon = ''
// for (let i = 0; i < occurencies[0].length; i++) {
//   if (occurencies[0][i] > occurencies[1][i]) {
//     gamma += '1'
//     epsilon += '0'
//   } else {
//     gamma += '0'
//     epsilon += '1'
//   }
// }

// console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))














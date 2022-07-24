
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
    















// let count = 0;
// let zero = 0;
// let uno = 0;
// let tmp = [];
// let epsilon = [];
// let gamma = [];

// for (let j = 0; j < demo[0].length; j++) {
//   for (let i = 0; i < demo.length; i++) {
//     tmp.push(+demo[i].charAt(j));
//     count = tmp.filter((x) => x === 0).length;

//     console.log(tmp);

//     zero = count;
//     uno = demo.length - zero;
//   }
//   if (zero > uno) {
//     gamma.push(0);
//     epsilon.push(1);
//   } else {
//     gamma.push(1);
//     epsilon.push(0);
//   }

//   tmp = [];
// }

// const decimal_gamma = gamma.join("");
// const decimal_epsilon = epsilon.join("");
// console.log(
//   "Final Result => ",
//   parseInt(decimal_gamma, 2) * parseInt(decimal_epsilon, 2)
// );
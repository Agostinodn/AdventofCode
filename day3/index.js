
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('\n');
const input2 = fs.readFileSync('./input.txt').toString().split('\n');
const demo = fs.readFileSync('./demo.txt').toString().split('\n');

let gamma = " ";

const colonna = '111011110101'

// 


// CONTO LE OCCORRENZE DI UNO E ZERI 
let count0 = (colonna.match(/0/g) || []).length;
let count1 = colonna.length - count0

// CONFRONTO SE CI SONO PIU 1 O 0
let mag = count1 > count0 ? 1 : 0;
console.log(mag);
gamma += mag;

console.log(gamma);


















// console.log('lololololo',input2);

// let content = [];

// input.map((valore, i) => {
//     content.push([+valore[valore.length]])
// })

// console.log(content);


// let commonBit = [];
// let noCommonBit = [];

// content.map(cont => {
//     // console.log(cont);
//     let a0 = 0;
//     let a1 = 0;
//     cont.map(item => {
//         item === 0 ? a0++ : a1++;
//     });
//     if (a0 > a1) {
//         commonBit.push(0);
//         noCommonBit.push(1);
//     }
//     else {
//         commonBit.push(1);
//         noCommonBit.push(0);
//     };
// })

// let gamma = parseInt(commonBit.toString().replace(/,/g, ''), 2);
// let epsilon = parseInt(noCommonBit.toString().replace(/,/g, ''), 2);
// let power = gamma * epsilon;

// console.log("Gamma: ", gamma);
// console.log("Epsilon: ", epsilon);
// console.log("Power: ", power);












// const fs = require('fs')
// const input = fs.readFileSync('./input.txt').toString().split('\n')
// const demo = fs.readFileSync('./demo.txt').toString().split('\n')

// let a = new Array();
// let b = new Array();
// let c = new Array();

// let d = new Array();
// let e = new Array();
// let f = new Array();

// let g = new Array();
// let h = new Array();
// let i = new Array();

// let l = new Array();
// let m = new Array();
// let n = new Array();


// let content = [a, b, c, d, e, f, g, h, i, l, m, n];

// input.map(valore => {
//     a.push(+valore[0]);
//     b.push(+valore[1]);
//     c.push(+valore[2]);

//     d.push(+valore[3]);
//     e.push(+valore[4]);
//     f.push(+valore[5]);

//     g.push(+valore[6]);
//     h.push(+valore[7]);
//     i.push(+valore[8]);

//     l.push(+valore[9]);
//     m.push(+valore[10]);
//     n.push(+valore[11]);
// })


// let commonBit = [];
// let noCommonBit = [];

// console.log('input:', input);
// console.log('content:', content);

// content.map(cont => {
//     let a0 = 0;
//     let a1 = 0;
//     cont.map(item => {
//         item === 0 ? a0++ : a1++;
//     });
//     if (a0 > a1) {
//         console.log('in condizione if');
//         commonBit.push(0);
//         noCommonBit.push(1);
//     }
//     else {
//         console.log('in condizione else');
//         commonBit.push(1);
//         noCommonBit.push(0);
//     };
// })


// console.log('commonBit: ', commonBit);
// console.log('noCommonBit: ', noCommonBit);

// let gamma = parseInt(commonBit.toString().replace(/,/g, ''), 2);

// let epsilon = parseInt(noCommonBit.toString().replace(/,/g, ''), 2);
// let power = gamma * epsilon;

// console.log("Gamma: ", gamma);
// console.log("Epsilon: ", epsilon);
// console.log("Power: ", power);



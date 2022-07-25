const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split('\n');

//P1
let colonna = [];
let mag, min;
// P2
let generatoreCont = [];
let generatore = input;
let scrubberCont = [];
let scrubber = input;

for (let posizione = 0; posizione < input[0].length; posizione++) {

  for (let pos = 0; pos < input.length; pos++) {
    colonna.push(input[pos].charAt(posizione));
    let count0 = (colonna.toString().match(/0/g) || []).length;
    let count1 = colonna.length - count0;
    mag = count1 > count0 ? 1 : 0;
    min = count1 > count0 ? 0 : 1;
  }

  console.log(posizione, 'indice-------mag: ', mag);

  generatore.forEach((element) => {
    if(generatore.length === 2){
      if (element[posizione] != mag && element[posizione +1] == mag ) generatoreCont.push(element);
    }
    if (generatore.length === 1) { generatoreCont.push(element) } else {
      if (element[posizione] == mag) generatoreCont.push(element);
    }
  });

  scrubber.forEach((element) => {
    if(generatore.length === 2){
      if (element[posizione] != mag && element[posizione +1] == mag ) generatoreCont.push(element);
    }
    if (scrubber.length === 1) { scrubberCont.push(element) } else {
      if (element[posizione] == min) scrubberCont.push(element);
    }
  });

  generatore = generatoreCont;
  scrubber = scrubberCont;
  console.log('Scrubber - ', scrubberCont);
  console.log('Generatore + ', generatoreCont);
  generatoreCont = [];
  scrubberCont = [];
}
console.log('Generatore ossigeno: ', parseInt(+generatore[0], 2));
console.log('Scrubber : ', parseInt(+scrubber[0], 2));
console.log('Supporto Vitale: ', parseInt(+scrubber[0], 2) * parseInt(+generatore[0], 2));

// supportoVitale = generatoreOssigeno * scrubberCO2
// generatoreOssigeno = valore piu comune 
// scrubberCO2 = valore meno comune 
// filtrare i vaori e recuperare solo quelli (nella posizione [pos]) con il bit piu comune





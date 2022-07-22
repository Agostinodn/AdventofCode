const fs = require('fs')
const numbers = fs.readFileSync('./numbers.txt').toString().split('\n')
const demo = fs.readFileSync('./demo.txt').toString().split('\n')

let contatore = 0;

numbers.forEach((element, i) => 
	{
		let valoreCorrente = +element;
		let prossimoValore = numbers[i + 1];
		prossimoValore > valoreCorrente ? contatore ++ : contatore;
	}
);
console.log(contatore);

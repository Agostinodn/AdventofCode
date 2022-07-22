const fs = require('fs')
const numbers = fs.readFileSync('./numbers.txt').toString().split('\n')
const demo = fs.readFileSync('./demo.txt').toString().split('\n')

let contatore = 0;

numbers.forEach((element, i, numbers) => {
	let a = element;
	let b = numbers[i + 1];
	let c = numbers[i + 2];
	let d = numbers[i + 3];

	if(d) {
	let valoreCorrente = +a + +b + +c;
	let valoreSuccessivo = +b + +c + +d;
	// console.log("Corrente: ",valoreCorrente," Succesivo: ", valoreSuccessivo);
	// console.log("valoreCorrente: ", valoreCorrente);
	// console.log("valoreSuccessivo: ", valoreSuccessivo);
	if (valoreSuccessivo > valoreCorrente) contatore++
	} else console.log('stop');
	
	
});
console.log(contatore);
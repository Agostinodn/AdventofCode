const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const demo = fs.readFileSync('./demo.txt').toString().split('\n');

const valori = input.map(item => item.split('\n').map(item => item.split(' ').map(item => item, +item[2]))).map(item => item.map(i => {
    const valore = [ i[0], +i[1]]
    return valore;
})).map(i => i[0]);

console.log('valori', demo);


// DOWN(+) aim
// UP(-) aim


let posizioneOrizzontale = 0;
let profondita = 0;
let aim = 0;

for (const [azione, i] of valori) {
  switch(azione){
      // FORWORD (+) posizione orizzontale di i
      // FORWORD (+) profondita * aim  
    case 'forward':
        console.log('-------forward');  
        posizioneOrizzontale += i;
        profondita += (aim * i);
        
        console.log('posizioneOriz:',posizioneOrizzontale);
        console.log('profondita:',profondita);
        break;

    case 'down':
        console.log('-------down'); 
        aim += i;
        console.log('aim:',aim);
        break;

    case 'up':
        console.log('-------up'); 
        aim -= i;
        console.log('aim:',aim);
        break;

    default:
        console.log('non trovato', azione);
        break;
  }
}

console.log("RISULTATO = = = = ", profondita * posizioneOrizzontale);
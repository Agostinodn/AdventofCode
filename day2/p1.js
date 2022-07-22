const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('\n')
const demo = fs.readFileSync('./demo.txt').toString().split('\n')

const valori = input.map(item => item.split('\n').map(item => item.split(' ').map(item => item, +item[2]))).map(item => item.map(i => {
    const valore = [ i[0], +i[1]]
    return valore;
})).map(i => i[0]);


// FORWORD(+)
let posizioneOrizzontale = 0;
// UP(-) • DOWN(+)
let profondita = 0;

for (const [azione, i] of valori) {
  switch(azione){
    case 'forward':
        console.log('forward ');  
      posizioneOrizzontale += i
      console.log('posizione or. ', posizioneOrizzontale);
      break;

    case 'down':
      profondita += i;
      break

    case 'up':
    profondita -= i
    break

    default:
        console.log('non trovato')
      break
  }
}

console.log(posizioneOrizzontale * profondita)


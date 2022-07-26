const fs = require("fs")
const input = fs.readFileSync("./demo.txt").toString().split("\n\n");

// NUMERI DA ESTRARRE
const numeri_da_estrarre = input.shift().split(",");
console.log(numeri_da_estrarre);

// CARTELLE MATRICE
let cartelle = input.map((numbers) =>
    numbers.split("\n").map((cartella) =>
        cartella
            .trim()
            .split(/ +/)
            .map((num) => +num)
    )
);
console.log(cartelle);


let win = {
    finish: false,
    cartella: [],
    ultimoValoreEstratto: 0
}

// CICLO ESTRAZIONE NUMERI
numeri_da_estrarre.forEach(numeroEstratto => {
    console.log('numero estratto------------', +numeroEstratto);
    for (const [i_cartella, cartella] of cartelle.entries()) {
        // console.log('cartella', i_cartella, "\n", cartella);


        // CICLO CARTELLE PER ESTRARRE COLONNE + CHECK
        let colonna = [];
        for (let i_riga = 0; i_riga < cartella[0].length; i_riga++) {
            for (let i_colonna = 0; i_colonna < cartella.length; i_colonna++) {
                let valore = (cartella[i_colonna][i_riga]);
                colonna.push(valore);
            }
            if (colonna.every(numero => numero == 'x') && win.finish === false) {
                console.log('---------------------------------------------------Bingo cartella', i_cartella);
                return win = {
                    finish: true,
                    cartella: cartelle[i_cartella],
                    ultimoValoreEstratto: +numeroEstratto
                };
            }
            colonna = [];
        }


        // CICLO RIGHE + CHECK
        for (const [i_numbers, numbers] of cartella.entries()) {
            // console.log('numbers', numbers, i_numbers);
            for (const [i_number, number] of numbers.entries()) {
                // console.log(numbers[i_numbers]);
                if (numbers.every(numero => numero == 'x') && win.finish === false) {
                    console.log('-----------------------Bingo cartella', i_cartella);
                    return win = {
                        finish: true,
                        cartella: cartelle[i_cartella],
                        ultimoValoreEstratto: +numeroEstratto
                    };
                } else {
                    if (number === +numeroEstratto) {
                        numbers[i_number] = 'x';
                        console.log('x aggiunta sul', number, ' nella cartella ', i_cartella);
                        // console.log(numbers);
                    }
                }
            }
        }


    }
});

console.log(win);
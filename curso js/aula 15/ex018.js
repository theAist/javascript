let numero = [5, 3, 1, 7, 8];
/*
console.log(`Nosso vetor é o ${numero}`);

numero.push(6);

console.log(`Nosso vetor é o ${numero}`);

console.log(`O vetor tem ${numero.length} posições.`);

console.log(`O vetor em ordem crescente fica ${numero.sort()}`);

console.log(`O primeiro valor da array é ${numero[0]}`);


for (let pos = 0; pos < numero.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${numero[pos]}`);
}


for(let pos in numero) {
    console.log(`A posição ${pos} tem o valor ${numero[pos]}`);
}
*/

let pos = numero.indexOf(8);

if (pos == -1) {
    console.log("Número não foi encontrado!");
} else {
    console.log(`O valor 8 está na posição ${pos}`);
}
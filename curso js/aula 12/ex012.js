let agora = new Date();
let hora = agora.getHours();

if (hora < 12) {
    console.log(`Bom dia, agora são ${hora} horas da manhã!`);
} else if (hora < 18) {
    console.log(`Boa tarde, agora são ${hora} horas da tarde!`);
} else if (hora <= 24) {
    console.log(`Boa noite, agora são ${hora} horas da noite!`);
} else {
    console.log(`${hora} não é um horário válido!`);
}
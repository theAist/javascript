// let idade = "21 anos";
// console.log(idade);

// let nomesAprovados = ["Ana", "Lucas", "Rafael", "Marcos"];

// for (let index = 0; index < nomesAprovados.length; index++) {
//     console.log(nomesAprovados[index]);
// }

// let idadeDosPais = [45, 47];
// let nomeDosPais = ["Jocilene", "Edivaldo"];
// let cidadeOndeMora = "Santo André";

// if (nomeDosPais === "Edivaldo") {
//     console.log (idadeDosPais = 45);
// } else {
//     console.log (idadeDosPais = 47);
// }

// let nome = "João"; //string
// let idade = 21; //number
// let estaAprovado = true; //boolean
// let sobernome; //undefined

// let pessoa = {
//     nome: "João",
//     idade: 21,
//     estaAprovado: true,
//     sobernome: "Ferreira",
//     estadoCivil: "Solteiro",
//     ondeNasceu: "Brasil"
// }

// console.log(pessoa);

// let familia = ["Pai", "Mãe", "Irmã"];
// console.log(familia[0]);

// let informacoesColega = ["Lucas", 21, true];
// console.log(informacoesColega.length);
// console.log(informacoesColega[0]);
// console.log(informacoesColega[1]);
// console.log(informacoesColega[2]);

// let corSite = "azul";

// function resetaCor(cor, tonalidade) {
//     corSite = cor + tonalidade;
// };

// console.log(corSite);
// resetaCor("verde ", "escuro");
// console.log(corSite);

// let enderecoAtual = "São Paulo";

// function novoEndereco(cidade, ciglaEstado) {
//     enderecoAtual = ciglaEstado + " " + "-" + " " + cidade; 
// }

// console.log(enderecoAtual);
// novoEndereco("MG", "Belo Horizonte");
// console.log(enderecoAtual);

// // nao retorna nada
// function dizerNome(){
//     console.log("João");
// }

// dizerNome();

// // faz um calculo e retorna resultado
// function multiplicarPorDois(valor) {
//     return valor * 2;
// }

// let resultado = multiplicarPorDois(5);
//  console.log(resultado);

// let salario = 1000;
// let aumento = 500;
// let meses = 24;
// let salarioAtual = salario + aumento;
// let rendaBrutaFinal = salario + aumento * meses;

// console.log("Seu salário por mês era de " + salario);
// console.log("Seu aumento foi de " + aumento);
// console.log("Então, o salário total ficou de " + salarioAtual);
// console.log("Dentro de 2 anos, a renda bruta final foi de " + rendaBrutaFinal);

// let idadeAtual = 21;

// console.log("Idade atual menos 1 é " + --idadeAtual);

// let valorTeclado = 300;
// valorTeclado -= valorTeclado;

// console.log(valorTeclado);

// console.log(1 === 1);
// console.log("1" === 1);

// let pontos = 100;
// let tipo = pontos >= 100 ? "Premium" : "Comum";

// console.log(tipo);

// let maiorDeIdade = true;
// let carteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || carteiraDeTrabalho;

// console.log(podeAplicar);

// let maiorDeIdade = true;
// let carteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && carteiraDeTrabalho;

// console.log("Pode aplicar: " + podeAplicar);

// let candidatoRecusado = !podeAplicar;

// console.log("Candidato resucado: " + candidatoRecusado);

let corPersonalisada = 0;
let corPadrao = "Azul";
let corPerfil = corPersonalisada || corPadrao;

console.log(corPerfil);



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

// let corPersonalisada = 0;
// let corPadrao = "Azul";
// let corPerfil = corPersonalisada || corPadrao;

// console.log(corPerfil);



// let horarioAtual = 10;

// if(horarioAtual >= 6.0 && horarioAtual <= 12.0) {
//     console.log("Bom dia");
// } else if(horarioAtual >= 12.1 && horarioAtual <= 18.0) {
//     console.log("Boa tarde");
// } else {
//     console.log("Boa noite");
// }



// let permissao;
// permissao = "Comum";

// switch (permissao) {
//     case "Comum":
//         console.log("Usuário tipo B");
//         break;

//     case "Gerente":
//         console.log("Usuário tipo A");
//         break;

//     case "Diretor":
//         console.log("Usuário tipo Z");
//         break;

//     default:
//         console.log("Usuário não categorizado");
//         break;
// }



// for (let index = 0; index < 5; index++) {
//     console.log("Estou aprendendo" + index);
// }

// for(let index = 1; index <= 20; index++) {
//     if (index % 2 !== 0) {
//         console.log(index);
//     }
// }

// for(let index = 20; index >= 1; index--) {
//     if (index % 2 !== 0) {
//         console.log(index);
//     }
// }



// let index = 1;

// while (index <= 20) {
//     if (index % 2 !== 0) {
//         console.log(index);
//     }
//     index++;
// }



// let index = 0;

// do {
//     console.log("Digitando" + index);
//     index++;
// } while (index < 10);



// const pessoa = {
//     nome: "João",
//     idade: 21
// };

// for (let chave in pessoa) {
//     console.log(chave, pessoa["nome"]);
// }

// const cores = ["Azul", "Verde", "Vermelho"];

// for (let indice in cores) {
//     console.log(indice, cores[indice]);
// }



// let cores = ["Marrom", "Cinza", "Púrpura"];

// for(let cor of cores){
//     console.log(cor);
// }

// let regioes = ["Demacia", "Noxus", "Ionia", "Shurima"];

// for (let lugar of regioes) {
//     console.log(lugar);
// }



// function filme(nome, ano, diretor, personagem) {
//     return {
//       nome,
//       ano,
//       diretor,
//       personagem,
//       anuncio() {
//         console.log("Em breve nos cinemas...");
//       }
//     }  
//   }
  
//   const caracteristicaFilme = filme("The reign of KEKW", 2022, "catJam", "monkaS");
//   console.log(caracteristicaFilme);



// function Celular(marca, tamanhoTela, capacidadeBateria) {
//   this.marca = marca,
//   this.tamanhoTela = tamanhoTela,
//   this.capacidadeBateria = capacidadeBateria,
//   this.ligar = function() {
//     console.log("Fazendo ligação...");
//   }
// }

// const celular2 = new Celular("Asus", 5.8, 5000);
// console.log(celular2);



// const mouse = {
//     cor: "Vermelho",
//     marca: "RedDragon"
//   }
  
//   mouse.velocidade = 5000;
//   mouse.trocarDPI = function() {
//     console.log("Trocando DPI...");
//   }
  
//   delete mouse.trocarDPI;
//   delete mouse.velocidade;
//   console.log(mouse);



// const celular = {
//     marca: "LG",
//     ano: 2019,
//     preço: "R$ 1000",
//     tamanhoTela: {
//       horizontal: 155,
//       vertical: 75
//     },
//     ligar: function() {
//       console.log("Ligando...");
//     }
// }
  
// const novoObjeto = Object.assign({bateria: 5000}, celular);
// console.log(novoObjeto);

// const objeto2 = {... celular};
// console.log(objeto2);



// Math.max(5, 3, 7, 20)

// Math.min(45, 12, 14);

// Math.random();

// Math.floor(1.6);

// Math.round(2.5);



// const mensagem = "Minha primeira mensagem!";
// const outraMensagem = new String("Boa tarde");
// const mensagem2 = " outra mensagem ";

// typeof outraMensagem;

// mensagem.length;

// outraMensagem[2];

// mensagem.includes("primeira");

// mensagem.startsWith("minha");

// mensagem.startsWith("Minha");

// mensagem.startsWith("Verde");

// mensagem.endsWith("mensagem");

// mensagem.endsWith("mensagem!");

// mensagem.indexOf("primeira");

// mensagem.indexOf("mensagem!");

// outraMensagem.indexOf("tarde");

// outraMensagem.replace("tarde", "noite");

// mensagem2.trim();

// mensagem2.split(" ");



// const mensagem1 = `Oi, isto é minha
// 'mensagem' aqui`;
// const outra = "esta é minha outra\n mensagem aqui";
// const nome = "Lucas";
// const email = 
// `Olá ${nome}!
// Agradeço por increver-se no canal...
// Para acompanhar os vídeos não se esqueça de ativar o sino...
// João.`;

// console.log(mensagem1);
// console.log(outra);
// console.log(email)



// const data1 = new Date();
// const data2 = new Date("March 20 2022 10:50");
// const data3 = new Date(2020,04,19,14,30);

// data3.setFullYear(2010);
// data2.toDateString();
// date2.toTimeString();
// date2.toISOString();



// const numeros = [1, 2, 3];

// console.log(numeros.unshift(0));
// console.log(numeros.splice(1, 0, "a"));
// console.log(numeros.push(4));

// const numeros1 = [1, 2, 3, 4];

// console.log(numeros1.indexOf(2));
// console.log(numeros1.indexOf(0));

// const numeros2 = [1, 2, 3, 4, 1, 5, 6];

// console.log(numeros2.lastIndexOf(1));

// const numeros3 = [1, 2, 3, 4, 5];

// console.log(numeros3.includes(2));

// const numeros4 = [1, 2, 3, 4, 5, 6];

// const ultimo = numeros4.pop();
// console.log(ultimo);
// console.log(numeros4);

// const primeiro = numeros4.shift();
// console.log(primeiro);
// console.log(numeros4);

// const meio = numeros4.splice(1, 1);
// console.log(meio);
// console.log(numeros4);

// let numeros5 = [1, 2, 3, 4, 5, 6];
// let outros = numeros5;

// numeros5.length = 0;
// console.log(numeros5);
// console.log(outros);

// numeros5.splice(0, numeros5.length);
// console.log(numeros5);
// console.log(outros);

// while (numeros5.length > 0) {
//   numeros5.pop();
// }
// console.log(numeros5);
// console.log(outros);

// const primeiro = [1, 2, 3];
// const segundo = [4, 5, 6, 7];

// const combinado = [...primeiro, "a", ...segundo, "b"];
// console.log(combinado);

// const clonado = [...combinado];
// console.log(clonado);

// const cortado = combinado.slice(1, 3);
// console.log(cortado);

// const numeros6 = [1, 2, 3, 4, 5];
// numeros6.forEach((numeros6, index) => console.log(numeros6, index));

// const numeros7 = [1, 2, 3, 4];

// const combinado2 = numeros7.join(".");
// console.log(combinado2);

// const frase2 = "Olá bem vindo ao curso";
// const resultado = frase2.split(" ");
// console.log(resultado);

// console.log(resultado.join("-"));

// const marcas = [
//     {id: 1, numero: "Dois"},
//     {id: 2, numero: "Tres"},
  
//   ];
  
//   const aMarca = marcas.find(function(aMarca) {
//     return aMarca.numero === "Dois";
//   });
  
//   console.log(aMarca);

// const marcas2 = [
//     {id: 1, nome: "a"},
//     {id: 2, nome: "b"},
//   ]
  
//   console.log(marcas2.find((index) => index.nome === "b"));



// let idade = prompt("Quantos anos tem?");

// if (idade < 18) {
//     alert("Você não pode entrar aqui!");
// }
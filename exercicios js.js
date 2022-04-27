// let valorMaior = max(10,10);
// console.log(valorMaior);

// function max(numero1, numero2) {
//     return numero1 > numero2 ? numero1 : numero2;

// }



// const resultado = fizzBuzz(11);
// console.log(resultado);

// function fizzBuzz(entrada) {
//     if(typeof entrada !== "number") {
//         return "Não é um número";
//     } else if(entrada % 3 === 0 && entrada % 5 === 0) {
//         return "FizzBuzz";
//     } else if(entrada % 3 === 0) {
//         return "Fizz";
//     } else if(entrada % 5 === 0) {
//         return "Buzz";
//     }

//     return entrada;
// }



// verificarVelocidade(130);

// function verificarVelocidade(velocidade) {
//     const velocidadeMaxima = 70;
//     const kmPorPonto = 5;

//     if(velocidade <= velocidadeMaxima) {
//         console.log("OK");
//     } else {
//         const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));

//         if(pontos >= 12) {
//             console.log("Carteira suspensa");
//         } else {
//             console.log("Pontos", pontos);
//         }
//     }
// }



// exibirTipo(5);

// function exibirTipo(limite) {
//     for(let index = 0; index <= limite; index++) {
//         if (index % 2 === 0) {
//             console.log(index, "PAR");
//         } else {
//             console.log(index, "IMPAR");
//         }
//     }
// }



// const filme = {
//     titulo: "monkaS",
//     ano: 2000,
//     diretor: "KEKW",
//     personagem: "AYAYA"
// }

// exibirPropriedades(filme);

// function exibirPropriedades(obj) {
//     for(index in obj) {
//         if(typeof obj[index] === "string") {
//             console.log(index, obj[index]);
//         }
//     }
// }



// somar(10);

// function somar(limite) {
//     let multiplosDeTres = 0;
//     let multiplosDeCinco = 0;

//     for(index = 0; index <= limite; index++) {
//         if(index % 3 === 0) {
//             multiplosDeTres += index;
//         } else if(index % 5 === 0) {
//             multiplosDeCinco += index;
//         }
//     }
//     console.log(multiplosDeCinco + multiplosDeTres);
// }



// const array = [70, 70, 80];
// console.log(mediaAluno(array));

// function mediaAluno(notas) {
//   const media = calcularMedia(notas);
  
//   if (media < 59) {
//     return "Sua média é F";
//   } else if (media < 69) {
//     return "Sua média é D";
//   } else if (media < 79) {
//     return "Sua média é C";
//   } else if (media < 89) {
//     return "Sua média é B";
//   } else if (media < 100) {
//     return "Sua média é A";
//   }
// }

// function calcularMedia(array) {
//   let soma = 0;  
  
//   for (let index of array) {
//     soma += index;
//   }
//   return soma / array.length;
// }



// exibirAsteriscos(10);

// function exibirAsteriscos(linhas) {
//   let padrao = "";

//   for(let index = 1; index <= linhas; index++) {
//     padrao += "*";
//     console.log(padrao);
//   }
// }



// exibirNumerosPrimos(58);

// function exibirNumerosPrimos(limite) {
//   for (let numero = 2; numero <= limite; numero++) {
//     if (numeroPrimo(numero)) {
//       console.log(numero);
//     }
//   }
// }

// function numeroPrimo(numero) {
//   for(let divisor = 2; divisor < numero; divisor++) {
//     if(numero % divisor === 0) {
//       return false;
//     }
//   }
//   return true;
// }



// const endereco = {
//     rua: "Avenida das Figueiras",
//     cidade: "São Paulo",
//     CEP: 18175.190
//   };
  
//   function exibirEndereco(endereco) {
//     for (let index in endereco) {
//       console.log(index, endereco[index]);
//     }
//   }
  
// exibirEndereco(endereco);



/* function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco1 = new Endereco("Rua do Lago", "São Paulo", 09181);
const endereco2 = new Endereco("Rua do Lago", "São Paulo", 09181);

function saoIguais(endereco1, endereco2) {
    return endereco1.value === endereco2.value;
}

function temEnderecoMemoriaIgual(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(saoIguais(endereco1, endereco2));
console.log(temEnderecoMemoriaIgual(endereco1, endereco2)); */



// let postagem = {
//     titulo: "Minha postagem",
//     mensagem: "Olá, bom dia",
//     autor: "KEKW",
//     visualizacoes: 10,
//     comentarios: [
//       {autor: "monkaS", comentario: "we forgor"},
//       {autor: "GIGACHAD", comentario: "refuse to elaborate"}
//     ],
//     estaaovivo: true
//   };
  
//   function exibirPostagem(postagem) {
//     for (let index in postagem) {
//       console.log(index, postagem[index]);
//     }
//   }
  
//   exibirPostagem(postagem);



// function Postagem(titulo, mensagem, autor) {
//     this.titulo = titulo,
//     this.mensagem = mensagem,
//     this.autor = autor,
//     this.visualizacoes = 0,
//     this.comentarios = [],
//     this.aoVivo = false
//   }
  
//   const aPostagem = new Postagem("Título da postagem", "Mensagem da postagem", "Autor da mensagem");
//   console.log(aPostagem);



// let faixas1 = [
//     {tootip: "até R$700", minimo: 0, maximo: 700},
//     {tootip: "até R$2000", minimo: 700, maximo: 2000},
//     {tootip: "até R$15000", minimo: 2000, maximo: 15000}
//   ];
  
//   function criaFaixaPreço(tooltip, minimo, maximo) {
//     return {
//       tooltip,
//       minimo,
//       maximo
//     }
//   }
  
//   let faixas2 = [
//     criaFaixaPreço("até R$700", 0, 700),
//     criaFaixaPreço("até R$2000", 700, 2000),
//     criaFaixaPreço("até R$15000", 2000, 15000)
//   ];
  
//   function Faixa(tooltip, minimo, maximo) {
//     this.tooltip = tooltip,
//     this.minimo = minimo,
//     this.maximo = maximo
//   }
  
//   let faixas3 = [
//     new Faixa("até R$700", 0, 700),
//     new Faixa("até R$2000", 700, 2000),
//     new Faixa("até R$15000", 2000, 15000)
//   ];
  
//   console.log(faixas1);
//   console.log(faixas2);
//   console.log(faixas3);



// const regiao = [
//     {estado: "SP", cidade: "São Bernado do Campo", CEP: 9141},
//     {estado: "MG", cidade: "Belo Horizonte", CEP: 7151},
//     {estado: "RJ", cidade: "Rio de Janeiro", CEP: 8161}
//   ];
  
//   const aRegiao = regiao.find(function(aRegiao) {
//     return aRegiao.cidade === "Rio de Janeiro";
//   });
  
//   console.log(aRegiao);

// const cinema = [
//     {filme: "Uzumaki", ano: 2012, diretor: "Junji Ito"},
//     {filme: "Drácula", ano: 2010, diretor: "Bram Stoker"}
//   ]
  
//   console.log(cinema.find((index) => index.diretor === "Bram Stoker"));



// const estados = ["São Paulo", "Ceará", "Santa Catarina", "Pará", "Goias"];
// console.log(estados);

// const meio = estados.splice(3, 1);
// console.log(estados);
// console.log(meio);

// const ultimo = estados.pop();
// console.log(estados);
// console.log(ultimo);

// const primeiro = estados.shift();
// console.log(estados);
// console.log(primeiro);



// let osNomes = ["Lucas", "Rafaela", "Joana", "Marcos"];
// let outros = osNomes;

// osNomes.length = 0;
// console.log(osNomes);
// console.log(outros);

// osNomes.splice(0, osNomes.length);
// console.log(osNomes);
// console.log(outros);

// while (osNomes.length > 0) {
//   osNomes.pop();
// }
// console.log(osNomes);
// console.log(outros);



// const primerio2 = [1, 2, 3];
// const segundo2 = [4, 5, 6];

// const combinado = [... primerio2, "%", ...segundo2];
// console.log(combinado);

// const marcas2 = ["Itautec", "Dell", "HP", "Samsung"];

// for (let index of marcas2) {
//   console.log(index);
// }

// marcas2.forEach((marcas2, index2) => console.log(marcas2, index2));



// const estacoes = ["Verão", "Outono", "Inverno", "Primavera"];

// const adicionado2 = estacoes.join(".");
// console.log(adicionado2);

// const frase2 = "Existem quatro estações no ano";
// const resultado2 = frase2.split(" ");
// console.log(resultado2);

// console.log(resultado2.join("-"));



// function VerificarEntrada() {
//     const NomeConvidado = document.getElementById("nome").value;
//     const ConvidadeCristian = ["Amanda", "Sabrina", "Rafael", "Jonas", "Carol", "João"];

//     if (ConvidadeCristian.includes(NomeConvidado)) {
//         document.getElementById("PermissaoDeEntrada").innerText = "Você pode entrar";
//     } else {
//         document.getElementById("PermissaoDeEntrada").innerText = "Você não pode entrar";
//     }
// }
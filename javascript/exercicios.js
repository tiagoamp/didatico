// Exercicios resolvidos

/* AULA 01 */ 

// Use o console do navegador: 
// Imprima no console do navegador a frase : "Olá desenvolvedor!"
console.log('Olá desenvolvedor');

// Alerte o Usuário:
// Exiba na tela do navegador uma janela de alerta com a frase : "Olá usuário do sistema!"
alert('Olá usuário do sistema');


/* AULA 02 */ 

// Confirmação com o usuário:
// Exiba no navegador uma janela de confirmação ("confirm") para o usuário com a pergunta:
// "Tem certeza que deseja sair do sistema?"
// Crie uma variável para guardar a resposta e imprima o valor dessa variável no console do navegador.
// Imprima também no console no tipo da variável criada ("typeof").
var resposta = confirm("Tem certeza que quer sair do sistema?");
console.log(typeof(resposta));
console.log(resposta);


// Obter dados do usuário:
// Exiba no navegador uma janela de entrada de dados ("prompt") perguntando qual seu herói favorito.
// Atribua a resposta em uma variável.
// Imprima no console do navegador a resposta obtida (valor da variável).
// Exiba mensagem na tela ("alert") com a frase: "Seu herói favorito é: <nome do herói informado>".
var heroi = prompt("Qual seu herói favorito?");
console.log(heroi);
alert("Seu herói favorito é: " + heroi);


// Use operadores para fazer cálculos:
// Implemente em Javascript um código para calcular e imprimir no console a área de um triângulo de base 12 cm, e altura de 8 cm, 
// sabendo que a fórmula da área do triângulo é:    
//     A = ( base * altura ) / 2
// Dicas:
// - Declare as variáveis 'base' e 'altura' e atribua os respectivos valores;
// - Declare e atribua na variável 'area' o valor da expressão aritmética da fórmula indicada;
// - Imprima o resultado no console do navegador.
var b = 12;
var h = 8;
var area = (b * h) / 2;
console.log(area);  // 48


// Use operadores para fazer cálculos:
// Um programador achou que estava tomando muito café, e decidiu calcular o volume da sua xícara para informar à sua nutricionista.
// Ele percebeu que a xícara era um cilindro perfeito e lembrou que a fórmula para calcular o volume do cilindro é:
//     V = pi * r**2 * h, 
// Onde pi = 3.14 (aprox.), r = raio e h = altura da xícara.
// Dado que as medidas da xícara eram 3 cm de raio e 7 cm de altura, escreva um código Javascript que faça o cálculo do volume da xícara 
// e imprima seu valor no console.
var pi = 3.14;
var r = 3;
var h = 7;
var v = pi * r**2 * h;
console.log(v);   // 1004.80 cm3


// Use operadores para fazer cálculos:
// O sistema de pontuação por partida no Campeonato Brasileiro de Futebol funciona assim:
//     Vitória = 3 pontos
//     Derrota = 0 pontos
//     Empate  = 1 ponto
// Dado que o time 'Tabajara F.C.' tem 12 vitórias, 2 derrotas e 6 empates, implemente um código em Javascript para calcular 
// a quantidade de pontos e de jogos deste time e imprimir no console a frase abaixo (preenchendo-a com os respectivos valores):
// "O time <NOME_DO_TIME> acumulou <NRO_DE_PTOS> após jogar <NRO_PARTIDAS> partidas".
// Dicas:
// - Crie variáveis para guardar o valor de vitorias, derrotas e empates.
// - Crie outra variável para guardar o nro de partidas (soma de vitorias, derrotas e empates).
// - Crie outra variável para receber o resultado do calculo de pontos.
var time = 'Tabajara FC';
var vitorias = 12
var derrotas = 2;
var empates = 6;
var partidas = vitorias + derrotas + empates;
var pontos = (vitorias * 3) + (empates * 1);
console.log('O time ' + time + ' acumulou ' + pontos + ' após jogar ' + partidas + ' partidas.');


// Acesse elementos de um Array:
// Implemente um código copiando o array abaixo, e depois imprima no console o valor dos seguintes elementos:
// var arr = [ 56, true, 'JS', 67, 99, 12, false, 88];
// a) Imprima o tamanho (length) do array;
// b) Imprima o valor do primeiro elemento;
// c) Imprima o valor do último elemento;
// d) Imprima o valor do terceiro elemento;
// e) Imprima o tipo ("typeof") do valor do quinto elemento.
console.log(arr.length);
var arr = [ 56, true, 'JS', 67, 99, 12, false, 88];
console.log(arr[0]);  // 56
console.log(arr[7]);  // ou console.log(arr[ arr.length - 1 ]) // 88
console.log(arr[2]);  // 'JS'
console.log( typeof(arr[4]) ); // number


// Acesse elementos de um Array (multidimensional):
// Implemente um código copiando o array abaixo, e depois imprima no console o valor dos seguintes elementos:
//     var notas = [
//         [10, 8.5, 5.5, 9.5],
//         [8.5, 7, 7.5, 6],
//         [8, 9, 10, 7.5],
//         [9, 9.5, 10, 8]
//     ];
// a) Imprima o valor da nota do primeiro elemento do terceiro array de notas;
// b) Imprima o valor da nota do segundo elemento do quarto array de notas
// c) Imprima o valor da soma das quatro primeiras notas de cada array

console.log( notas[2][0] );   // 8   
console.log( notas[3][1] );    // 9.5   
console.log( notas[0][0] + notas[1][0] + notas[2][0] + notas[3][0] );   // 25.5


// Percorra array com estrutura de repetição e faça operações com condicionais:
// O array abaixo representa lançamentos na conta bancária do Luke. 
// Os valores negativos são débitos e os valores positivos são créditos.
// Implemente um código copiando o array abaixo, e depois imprima no console o que se pede:
// var extrato = [ 100, -35, -15, -5, 55, -20 ];
// a) Percorra o array (operador 'for') e imprima cada elemento do array na ordem;
// b) Percorra o array (operador 'for') e imprima os elementos na ordem inversa (de trás pra frente);
// c) Percorra o array (operador 'for') e calcule o saldo final da conta (valor inicial era zero), 
// imprima o resultado no console;
// d) Imprima no console a mensagem 'saldo positivo' ou 'saldo negativo', dependendo do resultado do saldo final calculado.
var extrato = [ 100, -35, -15, -5, 55, -20 ];
for(var i=0; i < extrato.length; i++) {
    console.log(extrato[i]);
}
for(var i=extrato.length-1; i >=0; i--) {
    console.log(extrato[i]);
}
var saldo = 0;
for(var i=0; i < extrato.length; i++) {
    saldo += extrato[i];
}
console.log(saldo);
if (saldo >= 0) {
    console.log('saldo positivo');
} else {
    console.log('saldo negativo');
}


// Percorra array com estrutura de repetição e faça operações com condicionais:
// Mike tem um nro da sorte: 25.
// Ele conseguiu uma listagem do histórico dos resultados da loteria conforme arrays abaixo.
// Escreva um script para percorrer os elementos de nros sorteados e contabilizar quantas vezes 
// o nro da sorte dele foi sorteado.
// * Dica: Usar um for dentro do outro para percorrer os arrays internos.
var sorteados = [
    [ 1, 44,  6,  2, 45, 60],
    [10, 21, 55, 25, 34, 44],
    [ 8, 18, 28, 29, 55, 59],
    [60, 25, 11, 34,  6,  9],
    [55, 43, 25, 12,  7, 11]
];
var contador = 0;
for (var i=0; i < sorteados.length; i++) {
    var nros = sorteados[i];
    for(var j=0; j < nros.length; j++) {
        if ( nros[j] === 25 )
            contador++;
    }
}
console.log('contador', contador);


// Percorra array com várias estruturas de repetição:
// Percorra o array abaixo e imprima cada elemento da forma indicada em cada item.
// Imprima o valor de cada elemento usando:
// a) Repetição com 'for' (tradicional);
// b) Repetição com 'for .. in';
// c) Repetição com 'for .. of';
// d) Repetição com 'while'.
var arr = [12, 67, 23, 32];
for (var i=0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (var i in arr) {
    console.log(arr[i]);
}
for(var e of arr) {
    console.log(e);
}
var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

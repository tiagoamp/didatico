/*
1) Implemente uma função 'calcular' que receba como parâmetro um array (numérico) e 
identifique o maior e menor  valor do mesmo. 
Imprima no console estes valores ou "Não é possível calcular" qdo não for possível.
 Teste a função com as seguintes entradas:
 - [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
 - []
 - [1]
 - [1, -1]
 - null
 - [-2,-2,-2,-2] 
 - [20,10, 30]  
*/
const entrada =  [20,10, 30] ;
const saida = calcular(entrada);
console.log(saida);

function calcular(arr) {
    if (!arr || arr.length === 0) {
        console.log('Não é possível calcular');
        return;  
    } 
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('min', min);
    console.log('max', max);
}


/*
2) Então, dada o array com a sequencia abaixo (de 0 a 30), use a função 'forEach' para iterar sobre seus 
elementos e a cada múltiplo de 3 imprimir a palavra 'PIN', ou o próprio número caso contrário.
*/
const sequencia = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30];

sequencia.forEach(function(e){
    const valor = e % 3 === 0 ? 'PIN' : e;
    console.log(valor);
})

/*
3) Dado o array de nomes: 
Re-escreva este trecho de código abaixo usando a função 'forEach' para percorrer o array e 
imprimir os valores em letras maiúsculas:
*/
// for (let i=0; i< nomes.length; i++) {
//     const nome = nomes[i].toUpperCase();
//     console.log(nome);
// }
const nomes = ['kirk', 'spock', 'scott', 'mccoy', 'sulu'];
nomes.forEach(function(n) {
    console.log(n.toUpperCase());
})

/*
4) Dado o array de números:
const arr = [1,2,3,4];
Re-escreva este trecho de código abaixo usando a função '**map**' 
para gerar novo array com o triplo do valor de cada elemento:
const resultado = [];
for (let i=0; i<arr.length; i++) {
    resultado.push( arr[i] * 3 );
}
console.log(resultado);
*/
const arr = [1,2,3,4];
const resultado = arr.map(function(n) {
    return n * 3;
});
console.log(resultado);

/*
5) Uma das regras de senhas aceitas por um sistema é ter no
 mínimo 4 caracteres e no máximo 10 caracteres.
Para o array de amostragem de senhas abaixo, retorne um array indicando indicando quais passariam 
nesta validacao, retornando 'true' ou 'false' para cada elemento da lista.
Imprima o array resultante no console para conferência.
Resp.:
const validacao = senhas.map( function(s) {
    return s.length >= 4 && s.length <= 10;
});
console.log(validacao);
*/
const senhas = ['abc123', 'super-secreta', '42', 'senha', '007'];
const resultado = senhas.map(function(senha) {
    return senha.length >= 4 && senha.length <= 10;
});
console.log(resultado);

/*
6) Dado o array de notas:
Re-escreva este trecho de código abaixo usando a função '**filter**' 
para gerar novo array somente com as notas dos aprovados (nota >= 7):
const aprovados = [];
for(let i=0; i<notas.length; i++) {
    const n = notas[i];
    if (n >= 7) {
        aprovados.push(n);
    }
}
console.log(aprovados);
*/
const notas = [8.5, 7.5, 6, 3, 8.5, 10, 10, 9, 4, 7];
const aprovados = notas.filter(function(nota){
    return nota >= 7;
});
console.log(aprovados);


/*
7) Localize no array abaixo a primeira ocorrência de número maior que 50, 
usando a ('find').
*/
const numeros = [0,2,88,56,33,42,67,3,9,0,2];
const resultado = numeros.find(function(n) {
    return n > 50;
});
console.log(resultado);

/*
8) O array abaixo representa notas de alunos de um curso.
Use a função 'every' para identificar se todos os alunos 
foram aprovados no curso, sabendo que a nota mínima para 
aprovação é 7 (inclusive).
Imprima o resultado no console.
*/
const notas = [10, 9, 10, 7, 6, 8, 9, 10, 7, 9];
const resultado = notas.every(function(nota) {
    return nota >= 7;
});
console.log(resultado);

/*
9) Em uma competição de tiro esportivo existia uma regra que 
cada competidor poderia efetuar dez disparos, e aqueles cuja pontuação 
no alvo for menor que 5 são descartados na contagem final de pontos.
Cada elemento do array abaixo representa os pontos obtidos em cada disparo para um competidor.
Usando funções de arrays combinadas, faça as seguintes operações:
a) Filtre ('filter') o array para manter os pontos que serão considerados, ou seja, aqueles maiores que 5;
b) Calcule o total de pontuação obtida ('reduce'), somando os pontos considerados.
*/
const pontos = [10, 8, 5, 4, 9, 1, 9, 10, 2, 10];
const resultado = pontos.filter(function(t) {
    return t > 5;
})
.reduce(function(parcial, atual) {
    return parcial + atual;
});
console.log(resultado);

/*
10) Para o array de nomes de tags html abaixo, faça as ações que se pede:
a) Mantenha no array as tags iniciadas com a letra 'h' (filter), retirando as demais tags (não iniciadas com 'h');
Dica: palavra.startsWith('h') ==> retorna true se a palavra começa com 'h' 
b) Para cada tag resultante, adicione os sinais de < e > na tag (map):
Exemplo: h4 vai ficar <h4>
c) Imprima no console a tag resultante (forEach).
*/
const tags = ['html', 'head', 'body', 'div', 'h1', 'span'];
tags.filter(function(tag) {
    return tag.startsWith('h');
})
.map(function(tag) {
    return '<' + tag + '>';
})
.forEach(function(tag) {
    console.log(tag);
})

/*
Crie a classe 'Usuario' que tenha os atributos 'login' e 'senha'.
Adicione na classe o método 'autenticar', que recebe uma senha como parâmetro.
O método deve ter retorno boolean, retornando verdadeiro se a senha informada (no parâmetro) 
for igual a senha do usuário instanciado.
*/
class Usuario {
    constructor(login, senha) {
        this.login = login;
        this.senha = senha;
    }

    autenticar(senhaTestada) {
        return senhaTestada === this.senha;
    }
}

const user = new Usuario('admin','segredo');
console.log( user.autenticar('segredo') ); // true
console.log( user.autenticar('errado') );  // false

/*
11) Para modelar um jogo de ação, crie a classe Personagem que possua os atributos 'nome' e 'percentualVida'.
O nome deve ser indicado no construtor da classe, e o percentual de vida é iniciado com 100.
Crie o método 'sofreuDano(percentualDano)' cuja implementação diminua o valor de 'percentualDano' do percentual de vida do personagem
(até o,limite de zero).
Crie também o método 'usouKitMedico()' que adiciona 10 pontos ao percentual de vida do personagem (até o limite de 100).
*/

class Personagem {
    constructor(nome) {
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(percentualDano) {
        if (this.percentualVida - percentualDano < 0) {
            this.percentualVida = 0;
        } else {
            this.percentualVida -= percentualDano;
        }
    }

    usouKitMedico() {
        const percentualCura = 10;
        if (this.percentualVida + percentualCura > 100) {
            this.percentualVida = 100;
        } else {
            this.percentualVida += percentualCura;
        }
    }
}

const jogador = new Personagem('Mr. Shooter');
console.log( jogador );
jogador.sofreuDano(30);
jogador.usouKitMedico();
console.log (jogador.percentualVida ); // 80


/*
12) Crie a classe 'Animal' com os atributos 'nome', 'idade' e 'som'.
Depois crie as subclasses (de Animal) 'Cachorro' e 'Gato' com os atributos 'nome' e 'idade', 
incializando o atributo 'som' da superclasse com 'latido' e 'miado', respectivamente.
Crie uma instância de cada subclasse para testar, conforme abaixo.
*/

class Animal {
    constructor(nome, idade, som) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, 'latido');
    }
}

class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade, 'miado');
    }
}

const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // latido     
const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // miado


// 1) Use operador rest
// Implemente uma função para imprimir (no console) a saudação formal para membros de família real.
// A saudação deve constar o nome da pessoa seguido de todos os títulos de nobreza e realeza, 
// cujos títulos não tem quantidade fixa. 
// Portanto a função deve receber como argumentos o nome e cada titulo da pessoa. 

// Dicas: 
// I) use o operador rest para os parâmetros de títulos e use funções de array para manipulá-los (exemplos: array.forEach(), array.join(), etc...).
// II) Dados de entrada para teste:
// Nome: 'Charles'
// Títulos: 'Príncipe de Gales', 'Duque de Edimburgo', 'Duque da Cornualha', 'Duque de Rothesay', 'Conde de Merioneth', 'Conde de Carrick', 
// 'Conde de Chester', 'Barão Greenwich', 'Barão de Renfrew', 'Lorde das Ilhas', 'Príncipe e Grande Intendente da Escócia', 
// 'Cavaleiro da Ordem da Austrália'.
// Nome: Daenerys Targaryen
// Títulos: 'Rainha dos Ândalos', 'Protetora dos Sete Reinos', 'Khaleesi do Grande Mar de Grama', 'Mãe de Dragões', 'Quebradora de Correntes'.
function saudar(nome, ...titulos) {
    console.log(`Olá ${nome}, ${titulos.join()}`);
}
saudar('Charles','Príncipe de Gales', 'Duque de Edimburgo', 'Duque da Cornualha', 'Duque de Rothesay', 'Conde de Merioneth', 'Conde de Carrick', 
'Conde de Chester', 'Barão Greenwich', 'Barão de Renfrew', 'Lorde das Ilhas', 'Príncipe e Grande Intendente da Escócia', 
'Cavaleiro da Ordem da Austrália');
saudar('Daenerys Targaryen', 'Rainha dos Ândalos', 'Protetora dos Sete Reinos', 'Khaleesi do Grande Mar de Grama', 'Mãe de Dragões', 'Quebradora de Correntes');


// 2) Use rest operator
// Escreva uma função chamada 'adicionarSomenteNumeros' que recebe um número qualquer de parâmetros 
// (incluindo strings e numbers) e retorna a soma dos parâmetros numéricos;
// Dica: Lembram do 'typeof()' ?
function adicionarSomenteNumeros(...args) {
    return args.reduce( (acc, curr) => {
        return (typeof(curr) === 'number') ? acc + curr : acc;
    }, 0);
}
const resultado3 = adicionarSomenteNumeros('a', 2, 'abc', false, 3, 5, { obj: 'objeto' });
console.log(resultado3); // 10


// 3) Use spread operator
// Escreva uma função chamada 'adicionarPrimeiro' que recebe como parâmetro um array e 
// retorna outro array com a string 'primeiro' seguido dos demais elementos do array passado por parâmetro.
function adicionaPrimeiro(arr) {
    return ['primeiro', ...arr];
}
const letras = ['A', 'B', 'C'];
const resultado1 = adicionaPrimeiro( letras );
console.log( letras );  // nao afeta o array original
console.log( resultado1 );


// 4) Use rest e spread operator
// Escreva uma função chamada 'envolver' que recebe uma quantidade indefinida de tags html (no formato string) 
// parâmetro e como último elemento '</html>'.
// como parametros, e retorne outro array cujo primeiro elemento é '<html>', seguido das tags recebidas como 
function envolver(...tags) {
    return ['<html>', ...tags, '</html>'];
}
// Exemplo de entrada:
const r = envolver('<body>','<div>','<h1>','</h1>','</div>','</body>');
console.log(r); // saida esperada: ['<html>', '<body>','<div>','<h1>','</h1>','</div>','</body>', '</html>']


// 5) Use métodos de Promise (all)
// Para aprovação de um empréstimo, um banco usa as funções descritas abaixo para aprovação do cadastro pessoal e 
// outra função para aprovação do valor solicitado, onde ambas retornam uma promise para fazer o 
// processamento em segundo plano (no código, este processamento está simulado).
// Para o cliente instanciado no código abaixo, foram executadas ambas as funções e criadas variáveis para 
// armazenar este retorno.
// Usando o método 'Promise.all()', recupere o resultado de ambas as promises e imprima no console 
// 'APROVADO' ou 'REPROVADO', conforme os resultados das promises forem resolvidos ou rejeitados.
// Por fim, imprima no console a frase 'Fim do Processamento', qualquer que seja o resultado 
// (resolve ou reject) das promises ('finally').
// function aprovarDadosCadastrais( cliente ) {
//     return new Promise( (resolve, reject) => {
//         if (cliente.cpf === 11111111111)
//             resolve(true);
//         else 
//             reject(false);
//     });
// }
// function aprovarValorSolicitado( cliente, valor ) {
//     return new Promise( (resolve, reject) => {
//         if (cliente.margem >= valor)
//             resolve(true);
//         else 
//             reject(false);
//     });
// }
// const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0};
// const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
// const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);
// continue com o tratamento dos resultados de ambas as promises...
Promise.all( [aprovacaoCadastro, aprovacaoValor] )
    .then(res => {
        console.log(res);
        console.log('APROVADO!')
    })
    .catch(err => console.log('REPROVADO'))
    .finally(() => 'Fim do processamento');


// 6) Usando métodos de Promise (race)
// O sistema de uma empresa, após efetuar a venda, chama funções remotas de duas empresas de entrega dos pedidos, 
// e aquela que responder mais rápido nossa requisição fica responsável pela entrega.
// O retorno das chamadas foram adicionados nas constates abaixo: 'retornoEmpresa1' e 'retornoEmpresa2'.
// Usando 'Promise.race()', recupere o valor da promise da empresa vencedora e imprima no console do navegador.
// const retornoEmpresa1 = new Promise( (resolve, reject) => 
//     setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos
// const retornoEmpresa2 = new Promise( (resolve, reject) => 
//     setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos
// ... continue daqui ....  :-P 
Promise.race( [retornoEmpresa1, retornoEmpresa2] )
    .then( valor => {
        console.log(valor);
    });
// Resolvida 2
// Ambas resolvem, mas promise2 é mais rápida


// 7) Use async-await
// Altere as funçoes abaixo usando async-await para retorno e tratamento de promises:
// function obterClienteNoBancoDeDados(idCliente) {
//     return new Promise( (resolve, reject) => {
//             const cliente = { nome: 'bruce wayne', id: idCliente };
//             resolve(cliente);
//     });
// }
// function processar() {
//     obterClienteNoBancoDeDados(7)
//         .then(cliente => console.log(cliente));
// }
// processar();
async function obterClienteNoBancoDeDadosAsync(idCliente) {
    const cliente = { nome: 'bruce wayne', id: idCliente };
    return cliente;
}
async function processarAsync() {
    const cliente = await obterClienteNoBancoDeDados(8)
    console.log(cliente);
}
processarAsync();


// 8) Acesse API retornando promises
// Existe uma API pública que retorna a idade média das pessoas que possuem o nome passado como parâmetro.
// Para o cálculo, é usada uma base de dados internas, que pode ser subdividida pelo país passado 
// também como parâmetro.
// Faça uma chamada para esta API e descubra a idade média das pessoas com seu nome aqui no Brasil, conforme 
// exemplo abaixo. A idade está representada na propriedade 'age' do retorno da API.
// Obs.: Se seu nome não constar na base deles (age == null), usar outro nome para os testes.
async function pesquisarNome() {
    try {
        let res = await fetch('https://api.agify.io/?country_id=BR&name=tiago');
        let dados =  await res.json();
        const idade = dados.age;  // ou const { age: idade } = dados;
        return idade;  
    } catch (erro) {
        console.log(erro.message);
    }
}
const resultado = pesquisarNome()
    .then(p => console.log(p));

    
// 9) Acesse API retornando Promise
// Quanto será que está a cotação do Bitcoin hoje???
// Vamos descobrir!
// Obtenha os dados nessa API : https://api.coincap.io/v2/assets/bitcoin e imprima no console a frase:
// 'O preço do Bitcoin - <simbolo do bitcoin> em dólares hoje é $ <preço do bitcoin>`.
// Dica:
// a) Repare que o retorno desta API encapsula os dados dentro de um objeto 'data'.
// b) Use as propriedades 'symbol' e 'priceUsd' para preencher os valores na frase.
async function obterCotacao() {
    const res = await fetch('https://api.coincap.io/v2/assets/bitcoin');
    const dados = await res.json();
    console.log(dados);
    const msg = `O preço do Bitcoin - ${dados.data.symbol} em dólares hoje é $ ${dados.data.priceUsd}`;
    console.log(msg);
}
obterCotacao().then(msg => console.log(msg));


// 10) Acesse API retornando Promise
// Existe a API 'Random User Generator', que gera usuários fakes para fins de testes e protótipos.
// Vamos usá-la para praticar consumir APIs com promises.
// A URl da API é esta abaixo, onde o argumento 'results' representa a quantidade de resultados que queremos retornar:
// https://randomuser.me/api/?results=4
// Verifique a documentação e exemplo de retorno em: https://randomuser.me/documentation#howto, ou 
// faça uma chamada para a API (no navegador ou console) para verificar um exemplo de resultado.
// Com base no json de retorno, monte uma página web com layout semelhante ao anexo, contendo dados de usuários de sistema com 
// foto, título, nome, sobrenome, e-mail e endereço completo.
// O layout (css) é livre, desde que apresente as informações solicitadas.
// Dicas:
// a) Perceba que os resultados ficam dentro do campo 'results' do retorno;
// b) Para a foto, use a versão grande do campo 'picture': 'large' (grande);
// c) Para o nome, use os campos de 'name': 'title', 'first', 'last';
// d) Para o endereço, use os campos de 'location': 'street' (rua), 'city' (cidade), 'state' (estado), 'country' (país);
// e) Está anexado também uma sugestão de estruturação de página HTML para exibição, mas não é obrigatório seguir este exemplo.
// f) Como é uma chamada remota para o serviço, o resultado pode demorar alguns segundos para retornar.

// ** Resposta no arquivo 'exercicio_users.html'
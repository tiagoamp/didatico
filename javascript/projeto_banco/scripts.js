// classes de domínio (modelo)

class ContaBancaria {
    constructor(agencia, numeroConta, saldo) {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.operacoes = [];
    }

    debitar(valor) {
        //TODO: implementar!
    }

    creditar(valor) {
        //TODO: implementar!
    }

    gerarExtrato() {
        //TODO: implementar!
    }
    
}

class Lancamento {
    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
        this.data = new Date(); // data atual
    }
}


var conta = new ContaBancaria(1212, 333, 1000);


// controller: interação com UI
function efetuarOperacao(acao) {
    let valor = obterValor();

    if (acao !== 'saldo' && acao !== 'extrato') {
        const valido = validar(valor);
        if (!valido) {
            return; // nao faz nada
        } 
        valor = parseFloat(valor); // float = pto flutuante
    }
    
    switch (acao) {
        case 'sacar': 
            sacar(valor);
            break;
        case 'saldo':
            consultarSaldo();
            break;
        case 'depositar':
            depositar(valor); 
            break;
        case 'extrato':
            limparSaida();
            consultarExtrato();
            break;
        default:
            alert('Operação não reconhecida!');
    }

    limparValor();
}


function sacar(valor) {
    //TODO: implementar!
}

function depositar(valor) {
    //TODO: implementar!
}

function consultarSaldo() {
    //TODO: implementar!
}

function consultarExtrato() {
    //TODO: implementar!
}

function exibirExtrato(dados) {
    //TODO: implementar!
}

function obterValor() {
    const input = document.querySelector("#valor");
    let valor = input.value;
    return valor;
}

function limparValor() {
    const input = document.querySelector("#valor");
    input.value = "";
}

function limparSaida() {
    const saida = document.querySelector("#saida");
    while(saida.hasChildNodes()) {
        saida.removeChild(saida.lastChild);
    }
}

function validar(valor) {
    if (!valor || valor.length === 0) {
        alert('Valor não preenchido!');
        return false;
    }
    const regex = /^[0-9]*\.?[0-9]*$/;
    const isNumerico = valor.match(regex);
    if (!isNumerico) {
        alert('Valor deve ser numérico, parte fracionária separada por ponto e ser maior que zero!'); 
        return false;
    }
    if (parseFloat(valor) === 0) {
        alert('Valor não pode ser zero!');
        return false;
    }
    return true;
}

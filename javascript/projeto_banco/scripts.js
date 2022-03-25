// classes de domínio (modelo)

class ContaBancaria {
    constructor(agencia, numeroConta, saldo) {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.operacoes = [];
    }

    debitar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            const lancamento = new Lancamento('débito', valor);
            this.operacoes.push( lancamento );
            return true;
        }
        return false;
    }

    creditar(valor) {
        this.saldo += valor;
        const lancamento = new Lancamento('crédito', valor);
        this.operacoes.push( lancamento );
    }

    gerarExtrato() {
        const extrato = this.operacoes.map( function(lancamento) {
            return `Data: ${lancamento.data.toLocaleString('pt-BR')} - ${lancamento.tipo} - R$ ${lancamento.valor}`;
        });
        return extrato;
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
    const sucesso = conta.debitar(valor);
    if (sucesso) {
        alert('Saque efetuado com sucesso!');
    } else {
        alert('Saldo insuficiente!')
    }
}

function depositar(valor) {
    conta.creditar(valor);
    alert('Valor depositado com sucesso!')
}

function consultarSaldo() {
    alert('Saldo atual = R$ ' + conta.saldo);
}

function consultarExtrato() {
    const extrato = conta.gerarExtrato();
    if (extrato.length === 0) {
        alert('Sem movimentação!');
    } else {
        const extratoFormatado = extrato.map( function(e) {
            return '\n' + e;
        });
        //alert(extratoFormatado);
        exibirExtrato(extratoFormatado);
    }
}

function exibirExtrato(dados) {
    const saida = document.querySelector('#saida');
    const ul = document.createElement('ul');
    dados.forEach( function(e) {
        const li = document.createElement('li');
        li.innerHTML = e;
        li.style.color = e.includes('débito') ? 'red' : 'blue';
        ul.appendChild(li);
    })
    saida.appendChild(ul);
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

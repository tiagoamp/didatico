
// classes de domínio

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
            this.operacoes.push( new Lancamento('débito',valor) );  // poderia ser um obj JS tbm...
            return true;
        }
        return false;
    }
    
    creditar(valor) {
        this.saldo += valor;
        this.operacoes.push( new Lancamento('crédito',valor) );
    }

    gerarExtrato() {
        const extrato = this.operacoes.map( function(operacao) {
            return `Data: ${operacao.data.toLocaleString('pt-BR')} - ${operacao.tipo} - R$ ${operacao.valor}`;
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
    limparSaida();

    if (acao !== 'saldo' && acao !== 'extrato') {
        const isValido = validar(valor);
        if (!isValido) 
            return;  // não faz nada (alert jah está no método validar)
        valor = parseFloat(valor); // convertendo de string para numérico fracionário
    }
    
    switch(acao) {
        case 'sacar':
            sacar(valor);
            break;
        case 'depositar':
            depositar(valor);
            break;
        case 'saldo':
            consultarSaldo(); 
            break;
        case 'extrato':
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
        alert('Saldo insuficiente!');
    }
}

function depositar(valor) {
    conta.creditar(valor);
    alert('Valor depositado com sucesso!');     
}

function consultarSaldo() {
    alert('Saldo atual: R$ ' + conta.saldo);
}

function consultarExtrato() {
    const extrato = conta.gerarExtrato();
    if (extrato.length === 0) {
        alert("Sem movimentação!")
    } else {
        const identificacao = `Extrato :: Agência: ${conta.agencia} - Conta: ${conta.numeroConta} \n`;
        const extratoFormatado = extrato.map(e => '\n' + e);
        alert(identificacao + extratoFormatado);
        // exibirExtrato(extrato);
    }
}

function exibirExtrato(dados) {
    const saida = document.querySelector("#saida");
    const ul = document.createElement("ul");
    dados.forEach(e => {
        const li = document.createElement("li");
        li.innerText = e;
        li.style.color = e.includes('débito') ? "red" : "blue";
        ul.appendChild(li)
    });
    saida.appendChild(ul);
}

function limparSaida() {
    const saida = document.querySelector("#saida");
    while(saida.hasChildNodes()) {
        saida.removeChild(saida.lastChild);
    }
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

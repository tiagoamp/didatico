class Livro {
    constructor(isbn, titulo, autor, nroDeExemplares) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.nroDeExemplares = nroDeExemplares;
    }
}

class Leitor {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Emprestimo {
    constructor(isbn, matricula) {
        this.isbn = isbn;
        this.matricula = matricula;
        this.dataEmprestimo = new Date();
    }
}


class Biblioteca {
    constructor() {
        this.livros = [
            new Livro(1111111111, 'Princípios Matemáticos da Filosofia Natural', 'Isaac Newton', 1),
            new Livro(2222222222, 'Sapiens', 'Yuval Harari', 3),
            new Livro(3333333333, 'O Guia do Mochileiro das Galáxias', 'Douglas Adams', 2),
            new Livro(4444444444, 'O Universo numa casca de noz', 'Stephen Hawking', 2)
        ];
        
        this.leitores = [
            new Leitor(123, 'Jean-Luc Picard'),
            new Leitor(321, 'Willian Riker'),
            new Leitor(678, 'Wesley Crusher'),
            new Leitor(888, 'Tasha Yar')
        
        ];
        this.emprestimos = [];
    }
    
    consultarEmprestimos(isbn) {
        return this.emprestimos.filter( function(emp) {
            return emp.isbn === isbn;
        });
    }

    consultarEmprestimo(isbn, matricula) {
        return this.emprestimos.find( function(emp) {
            return emp.isbn === isbn && emp.matricula === matricula;
        });
    }
    
    consultarDisponibilidade(isbn) {
        const qtdEmprestados = this.consultarEmprestimos(isbn).length;
        const livro = this.livros.find( function(livro) {
            return livro.isbn === isbn;
        });
        return qtdEmprestados < livro.nroDeExemplares; 
    }

    realizarEmprestimo(isbn, matricula) {
        const isDisponivel = this.consultarDisponibilidade(isbn);
        if (!isDisponivel)
            return null;
        const emprestimo = new Emprestimo(isbn, matricula);
        this.emprestimos.push(emprestimo);
        return emprestimo;
    }

    fazerDevolucao(isbn, matricula) {
        const emprestimo = this.consultarEmprestimo(isbn, matricula);
        if (!emprestimo)
            return false;
        const indice = this.emprestimos.indexOf(emprestimo);
        this.emprestimos.splice(indice, 1);
        return true;
    }

}


function executarRoteiro() {
    // listagem de livros e leitores
    console.log('--- Listagem de Livros, Leitores e Emprestimos ---');
    console.log('livros', biblioteca.livros);
    console.log('leitores', biblioteca.leitores);
    
    // fazendo emprestimo com sucesso
    console.log('--- Fazendo empréstimo com sucesso ---');
    let emp = biblioteca.realizarEmprestimo(4444444444, 123);
    if (emp) {
        console.log(`Emprestimo realizado com sucesso: ISBN[${emp.isbn}] Matrícula[${emp.matricula}]`);
    } else {
        console.log('ERRO: Empréstimo não realizado!');
    }
    
    // consultar disponibilidade (deve estar disponivel)
    console.log('--- Consultar disponibilidade (deve estar disponível) ---');
    let isDisponivel = biblioteca.consultarDisponibilidade(4444444444);
    if (isDisponivel) {
        console.log('Livro isbn 4444444444 ainda disponível!');
    } else {
        console.log('ERRO: livro indisponível!');
    }
    
    // novo emprestimo do mesmo livro com sucesso (ultimo exemplar)
    console.log('--- Fazendo novo empréstimo com sucesso ---');
    emp = biblioteca.realizarEmprestimo(4444444444, 321);
    if (emp) {
        console.log(`Emprestimo realizado com sucesso: ISBN[${emp.isbn}] Matrícula[${emp.matricula}]`);
    } else {
        console.log('ERRO: Empréstimo não realizado!');
    }
        
    // consultar disponibilidade (deve estar indisponível)
    console.log('--- Consultar disponibilidade (deve estar indisponível) ---');
    isDisponivel = biblioteca.consultarDisponibilidade(4444444444);
    if (isDisponivel) {
        console.log('ERRO: livro deveria estar indisponível!');
    } else {
        console.log('Livro isbn 4444444444 indisponível!');
    }
    
    // fazer emprestimo de outro livro 
    console.log('--- Fazendo empréstimo de outro livro com sucesso ---');
    emp = biblioteca.realizarEmprestimo(1111111111, 123);
    if (emp) {
        console.log(`Emprestimo realizado com sucesso: ISBN[${emp.isbn}] Matrícula[${emp.matricula}]`);
    } else {
        console.log('ERRO: Empréstimo não realizado!');
    }
    
    // Devolvendo segundo livro emprestado
    console.log('--- Devolvendo 2o livro emprestado ---');
    let isDevolvido = biblioteca.fazerDevolucao(4444444444, 321);
    if (isDevolvido) {
        console.log(`Devolução realizada com sucesso: ISBN[${emp.isbn}] Matrícula[${emp.matricula}]`);
    } else {
        console.log('ERRO: Devolução não realizada!');
    }

    // consultar disponibilidade (deve estar disponível novamente)
    console.log('--- Consultar disponibilidade (deve estar disponível) ---');
    isDisponivel = biblioteca.consultarDisponibilidade(4444444444);
    if (isDisponivel) {
        console.log('Livro isbn 4444444444 disponível!');
    } else {
        console.log('ERRO: livro deveria estar disponível!');
    }

    // listagem de emprestimos (deve conter 2 elementos)
    console.log('--- Listagem de empréstimos (deve conter 2 elementos) ---');
    console.log('emprestimos', biblioteca.emprestimos); 
    
}

var biblioteca = new Biblioteca();
executarRoteiro();

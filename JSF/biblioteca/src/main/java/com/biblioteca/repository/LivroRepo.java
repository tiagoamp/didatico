package com.biblioteca.repository;

import com.biblioteca.model.Livro;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Representa um mock de repositório (banco de dados fake)
 * com dados persistentes
 */
public class LivroRepo {

    private static List<Livro> livrosDoBD = new ArrayList<>();

    private static long idAtual = 0;

    static {
        livrosDoBD.add(new Livro(obterProximoId(), 9788599296578L, "O guia do mochileiro das galáxias", "Douglas Adams", "Ficção",
                LocalDate.of(2011, Month.NOVEMBER, 3), 208));
        livrosDoBD.add(new Livro(obterProximoId(), 9788531406737L, "Princípios Matemáticos de Filosofia Natural", "Isaac Newton", "Educacional",
                LocalDate.of(1687, Month.JULY, 5), 328));
        livrosDoBD.add(new Livro(obterProximoId(), 9786555980004L, "O Retrato de Dorian Gray", " Oscar Wilde", "Romance",
                LocalDate.of(1890, Month.DECEMBER, 1), 320));
    }

    public static List<Livro> obterLivrosDoBD() {
        return livrosDoBD;
    }

    public static void adicionar(Livro livroNovo) {
        Long proxId = obterProximoId();
        livroNovo.setId(proxId);
        livrosDoBD.add(livroNovo);
    }

    public static void remover(long idLivro) {
        livrosDoBD.removeIf(l -> l.getId() == idLivro);
    }

    public static void alterar(Livro livroAtualizado) {
        remover(livroAtualizado.getId());
        livrosDoBD.add(livroAtualizado);
        Collections.sort(livrosDoBD, Comparator.comparing(Livro::getId));
    }


    private static long obterProximoId() {
        return ++idAtual;
    }

}

package com.cursosjsfexerc.repository;

import com.cursosjsfexerc.model.Curso;

import javax.enterprise.context.ApplicationScoped;
import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@ApplicationScoped
public class CursoRepo {

    private List<Curso> cursos = new ArrayList<>();

    public CursoRepo() {
        cursos.add(new Curso("C01", "Curso de Java", LocalDate.of(2023, Month.JANUARY, 1), LocalDate.of(2023, Month.FEBRUARY, 1)));
        cursos.add(new Curso("C02", "Curso de JSF", LocalDate.of(2023, Month.FEBRUARY, 1), LocalDate.of(2023, Month.MARCH, 1)));
        cursos.add(new Curso("C03", "Curso de PrimeFaces", LocalDate.of(2023, Month.APRIL, 1), LocalDate.of(2023, Month.MAY, 1)));
    }


    public List<Curso> obter() {
        cursos.sort(Comparator.comparing(Curso::getDataInicio));
        return new ArrayList<>(cursos);
    }

    public void inserir(Curso curso) {
        cursos.add(curso);
    }

    public void remover(Curso curso) {
        cursos.remove(curso);
    }

    public void alterar(Curso cursoAlterado) {
        cursos.replaceAll(c -> c.equals(cursoAlterado) ? cursoAlterado : c);
    }

}

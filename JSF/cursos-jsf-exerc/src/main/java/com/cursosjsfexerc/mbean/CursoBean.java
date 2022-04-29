package com.cursosjsfexerc.mbean;

import com.cursosjsfexerc.model.Curso;
import com.cursosjsfexerc.repository.CursoRepo;

import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named
@SessionScoped
public class CursoBean implements Serializable {

    @Inject
    private CursoRepo repo;

    private List<Curso> cursos = new ArrayList<>();

    private Curso curso = new Curso();


    public void onLoad() {
        this.cursos = repo.obter();
    }

    public String excluir(Curso curso) {
        repo.remover(curso);
        return null;
    }

    public String editar(Curso curso) {
        this.curso = curso;
        return "cadastro?faces-redirect=true";
    }

    public String salvar() {
        boolean novo = !cursos.stream().anyMatch(c -> c.equals(curso));
        if (novo) {
            repo.inserir(curso);
        } else {
            repo.alterar(curso);
        }
        this.curso = new Curso();
        return "principal?faces-redirect=true";
    }


    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public List<Curso> getCursos() {
        return cursos;
    }

}

package com.biblioteca.mbean;

import com.biblioteca.model.Livro;
import com.biblioteca.repository.LivroRepo;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@ManagedBean(name = "livroBean")
@SessionScoped
public class LivroBean {

	private List<Livro> livros = new ArrayList<>();
	private Livro livro = new Livro();

	
	@PostConstruct
	public void carregarLivrosJaCadastrados() {
		List<Livro> livrosBD = LivroRepo.obterLivrosDoBD();
		livros.addAll(livrosBD);
	}
	
	public String salvar() {
		boolean isLivroNovo = livro.getId() == null;
		if (isLivroNovo) {
			boolean jaCadastrado = livros.stream().anyMatch(l -> l.getIsbn().longValue() == livro.getIsbn());
			if (jaCadastrado) {
				FacesContext.getCurrentInstance().addMessage(null,
					new FacesMessage(FacesMessage.SEVERITY_ERROR, "Erro de Validação", "Livro já cadastrado com ISBN informado"));
				return null;
			}
			LivroRepo.adicionar(livro);
		} else {
			LivroRepo.alterar(livro);
		}		
		livros = LivroRepo.obterLivrosDoBD();
		livro = new Livro();
		return "listagem?faces-redirect=true";
	}
	
	public String editar(Livro livroSelecionado) {
		this.livro = livroSelecionado;
		return "cadastro";
	}
	
	public String remover(Livro livro) {
		LivroRepo.remover(livro.getId());
		this.livros = LivroRepo.obterLivrosDoBD();
		return null;
	}
	
	public List<String> getCategorias() {
		return Arrays.asList("Romance", "Ficção", "Educacional", "Auto-Ajuda");
	}

	public Livro getLivro() {
		return livro;
	}
	public List<Livro> getLivros() {
		return livros;
	}
	
}

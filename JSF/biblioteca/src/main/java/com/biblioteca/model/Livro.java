package com.biblioteca.model;

import java.time.LocalDate;

public class Livro {

    private Long id;

    private Long isbn;

    private String titulo;

    private String autor;

    private String categoria;

    private LocalDate dataPublicacao;

    private Integer nroDePaginas;


    public Livro() { }

    public Livro(Long id, Long isbn, String titulo, String autor, String categoria, LocalDate dataPublicacao, Integer nroDePaginas) {
        this.id = id;
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.dataPublicacao = dataPublicacao;
        this.nroDePaginas = nroDePaginas;
    }

    @Override
    public String toString() {
        return "Livro{" +
                "id=" + id +
                ", isbn=" + isbn +
                ", titulo='" + titulo + '\'' +
                ", autor='" + autor + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getIsbn() {
        return isbn;
    }
    public void setIsbn(Long isbn) {
        this.isbn = isbn;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public LocalDate getDataPublicacao() {
        return dataPublicacao;
    }
    public void setDataPublicacao(LocalDate dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public Integer getNroDePaginas() {
        return nroDePaginas;
    }
    public void setNroDePaginas(Integer nroDePaginas) {
        this.nroDePaginas = nroDePaginas;
    }
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

}

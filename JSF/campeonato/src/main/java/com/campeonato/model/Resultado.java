package com.campeonato.model;

public enum Resultado {

    VITORIA(3),
    DERROTA(0),
    EMPATE(1);

    private int pontuacao;

    private Resultado(int pontuacao) {
        this.pontuacao = pontuacao;
    }

    public int getPontuacao() {
        return pontuacao;
    }
}

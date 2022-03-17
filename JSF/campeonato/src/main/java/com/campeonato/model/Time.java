package com.campeonato.model;

import java.math.BigDecimal;
import java.math.RoundingMode;

import static com.campeonato.model.Resultado.EMPATE;
import static com.campeonato.model.Resultado.VITORIA;

public class Time {

    private String nome;
    private String abreviatura;
    private int vitorias;
    private int derrotas;
    private int empates;
    private int golsPro;
    private int golsContra;

    public Time() { }

    public Time(String nome, String abreviatura) {
        this.nome = nome;
        this.abreviatura = abreviatura;
    }


    public int getJogos() {
        return vitorias + derrotas + empates;
    }

    public Integer getPontos() {
        return vitorias * VITORIA.getPontuacao() + empates * EMPATE.getPontuacao();
    }

    public Integer getSaldoDeGols() {
        return golsPro - golsContra;
    }

    public Integer getPercAproveitamento() {
        int qtdJogos = getJogos();
        if (qtdJogos == 0)
            return 0;
        int qtdPtosDisputados = qtdJogos * VITORIA.getPontuacao();
        BigDecimal perc = new BigDecimal( 100 * this.getPontos() )
                .divide(new BigDecimal(qtdPtosDisputados), 2, RoundingMode.HALF_UP);
        return perc.intValue();
    }

    public void atualizar(Resultado resultado, Integer golsFeitos, Integer golsTomados) {
        this.golsPro += golsFeitos;
        this.golsContra += golsTomados;
        switch (resultado) {
            case VITORIA:
                this.vitorias++;
                break;
            case DERROTA:
                this.derrotas++;
                break;
            case EMPATE:
                this.empates++;
                break;
        }
    }


    @Override
    public String toString() {
        return "Time{" +
                "nome='" + nome + '\'' +
                ", abreviatura='" + abreviatura + '\'' +
                ", vitorias=" + vitorias +
                ", derrotas=" + derrotas +
                ", empates=" + empates +
                '}';
    }


    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getAbreviatura() {
        return abreviatura;
    }
    public void setAbreviatura(String abreviatura) {
        this.abreviatura = abreviatura;
    }
    public int getVitorias() {
        return vitorias;
    }
    public void setVitorias(int vitorias) {
        this.vitorias = vitorias;
    }
    public int getDerrotas() {
        return derrotas;
    }
    public void setDerrotas(int derrotas) {
        this.derrotas = derrotas;
    }
    public int getEmpates() {
        return empates;
    }
    public void setEmpates(int empates) {
        this.empates = empates;
    }
    public int getGolsPro() {
        return golsPro;
    }
    public void setGolsPro(int golsPro) {
        this.golsPro = golsPro;
    }
    public int getGolsContra() {
        return golsContra;
    }
    public void setGolsContra(int golsContra) {
        this.golsContra = golsContra;
    }

}

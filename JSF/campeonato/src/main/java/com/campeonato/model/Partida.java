package com.campeonato.model;

import static com.campeonato.model.Resultado.*;

public class Partida {

    private String time1;
    private Integer golsTime1;
    private String time2;
    private Integer golsTime2;

    public Partida() { }

    public Partida(String time1, Integer golsTime1, String time2, Integer golsTime2) {
        this.time1 = time1;
        this.golsTime1 = golsTime1;
        this.time2 = time2;
        this.golsTime2 = golsTime2;
    }

    public boolean isCamposPreenchidos() {
        return time1 != null && golsTime1 != null && time2 != null && golsTime2 != null;
    }

    public Resultado obterResultadoTime1() {
        if (golsTime1 == golsTime2)
            return EMPATE;
        return golsTime1 > golsTime2 ? VITORIA : DERROTA;
    }

    public Resultado obterResultadoTime2() {
        if (golsTime1 == golsTime2)
            return EMPATE;
        return golsTime2 > golsTime1 ? VITORIA : DERROTA;
    }


    public String getTime1() {
        return time1;
    }
    public void setTime1(String time1) {
        this.time1 = time1;
    }
    public Integer getGolsTime1() {
        return golsTime1;
    }
    public void setGolsTime1(Integer golsTime1) {
        this.golsTime1 = golsTime1;
    }
    public String getTime2() {
        return time2;
    }
    public void setTime2(String time2) {
        this.time2 = time2;
    }
    public Integer getGolsTime2() {
        return golsTime2;
    }
    public void setGolsTime2(Integer golsTime2) {
        this.golsTime2 = golsTime2;
    }

}

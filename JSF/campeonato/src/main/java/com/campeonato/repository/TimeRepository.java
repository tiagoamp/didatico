package com.campeonato.repository;

import com.campeonato.model.Time;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Representa um repositório de times (fake).
 */
public class TimeRepository {

    private static List<Time> times = Arrays.asList(
            new Time("São Paulo Futebol Clube", "SPFC"),
            new Time("Palmeiras", "PAL"),
            new Time("Flamengo", "FLA"),
            new Time("Fluminense", "FLU"),
            new Time("Santos", "SAN"),
            new Time("Fortaleza", "FOR"),
            new Time("Corinthians", "COR"),
            new Time("Internacional", "INTER"),
            new Time("Grêmio", "GRE"),
            new Time("Atlético Mineiro", "ATLM"),
            new Time("Avai", "AVA"),
            new Time("Figueirense", "FIG")
    );

    public static List<Time> obterLista() {
        return new ArrayList<>(times);
    }

}

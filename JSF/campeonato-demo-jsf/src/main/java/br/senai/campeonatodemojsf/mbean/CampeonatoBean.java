package br.senai.campeonatodemojsf.mbean;

import br.senai.campeonatodemojsf.model.Partida;
import br.senai.campeonatodemojsf.model.Time;
import br.senai.campeonatodemojsf.repository.TimeRepository;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Named
@ViewScoped
public class CampeonatoBean implements Serializable {

    @Inject
    private TimeRepository timeRepo;

    private List<Time> classificacao = new ArrayList<>();
    private Partida partida = new Partida();

    @PostConstruct
    public void carregarListaDeTimes() {
        List<Time> times = timeRepo.obterLista();
        classificacao.addAll(times);
        ordenarTimes();
    }

    public String atualizar() {
        if (!isDadosPartidaValidos())
            return null;
        for (Time time : classificacao) {
            if (time.getAbreviatura().equals(partida.getTime1()))
                time.atualizar(partida.obterResultadoTime1(), partida.getGolsTime1(), partida.getGolsTime2());
            else if (time.getAbreviatura().equals(partida.getTime2()))
                time.atualizar(partida.obterResultadoTime2(), partida.getGolsTime2(), partida.getGolsTime1());
        }
        ordenarTimes();
        partida = new Partida();
        return null;
    }

    private void ordenarTimes() {
        Comparator<Time> ordenacao = Comparator.comparing(Time::getPontos).reversed()
                .thenComparing(Time::getNome);
        classificacao.sort(ordenacao);
    }

    public List<Time> getTimes() {
        return classificacao.stream().sorted(Comparator.comparing(Time::getNome)).collect(toList());
    }

    public List<Time> getClassificacao() {
        return classificacao;
    }

    public Partida getPartida() {
        return partida;
    }

    private boolean isDadosPartidaValidos() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        if (!partida.isCamposPreenchidos())
            facesContext.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Campos obrigatórios não preenchidos", "Erro de Validação"));
        if (partida.getTime1().equals(partida.getTime2()))
            facesContext.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Informado time 1 igual ao time 2!", "Erro de Validação"));
        return facesContext.getMessageList().isEmpty();
    }

}

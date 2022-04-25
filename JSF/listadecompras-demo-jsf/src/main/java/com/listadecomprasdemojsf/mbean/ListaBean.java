package com.listadecomprasdemojsf.mbean;

import com.listadecomprasdemojsf.model.ItemDeLista;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named
@SessionScoped
public class ListaBean implements Serializable {

    private ItemDeLista item = new ItemDeLista();

    private List<String> lista = new ArrayList<>();

    private List<String> itensSelecionados = new ArrayList<>();


    public String adicionar() {
        lista.add(item.toString());
        item = new ItemDeLista();
        return null;
    }

    public String remover() {
        if (itensSelecionados.isEmpty())
            return null;
        lista.removeAll(itensSelecionados);
        itensSelecionados = new ArrayList<>();
        return null;
    }


    public ItemDeLista getItem() {
        return item;
    }

    public void setItem(ItemDeLista item) {
        this.item = item;
    }

    public List<String> getLista() {
        return lista;
    }

    public void setLista(List<String> lista) {
        this.lista = lista;
    }

    public List<String> getItensSelecionados() {
        return itensSelecionados;
    }

    public void setItensSelecionados(List<String> itensSelecionados) {
        this.itensSelecionados = itensSelecionados;
    }
}

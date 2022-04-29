package com.cursosjsfexerc.mbean;

import com.cursosjsfexerc.model.Usuario;
import com.cursosjsfexerc.repository.UsuarioRepo;

import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;
import java.util.Optional;

@Named
@SessionScoped
public class LoginBean implements Serializable {

    @Inject
    private UsuarioRepo usuarioRepo;

    private String login;
    private String senha;

    private Usuario usuario;


    public String autenticar() {
        Optional<Usuario> usuarioOpt = usuarioRepo.obterPor(login, senha);
        if (!usuarioOpt.isPresent()) {
            FacesContext.getCurrentInstance().addMessage(null,
                    new FacesMessage(FacesMessage.SEVERITY_ERROR, "Erro de Autenticação:", "Credenciais inválidas"));
            return null;
        }
        this.usuario = new Usuario(usuarioOpt.get().getLogin(), usuarioOpt.get().getNome());
        this.login = null;
        this.senha = null;
        return "protected/principal?faces-redirect=true";
    }

    public String logout() {
        FacesContext.getCurrentInstance().getExternalContext().invalidateSession();
        return "/faces/login?faces-redirect=true";
    }


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}

package com.campeonato.validator;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import java.util.Map;

@FacesValidator("GolsValidator")
public class GolsValidator implements Validator {

    @Override
    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {
        if (value == null || !value.toString().matches("^\\d{1,2}$")) {
            Map<String, Object> atributos = component.getAttributes();
            String nomeCampo = (String) atributos.getOrDefault("nome-campo", "Campo");
            FacesMessage msg = new FacesMessage(nomeCampo + ": Valor informado é inválido","Erro de validação");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }
    }

}

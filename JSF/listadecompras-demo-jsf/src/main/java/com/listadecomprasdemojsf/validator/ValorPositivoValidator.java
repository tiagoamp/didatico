package com.listadecomprasdemojsf.validator;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("ValorPositivoValidator")
public class ValorPositivoValidator implements Validator {

    @Override
    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {
        boolean valido = value != null;
        if (value != null) {
            try {
                Float v = Float.valueOf(value.toString());
                if (v <= 0F)
                    valido = false;
            } catch (NumberFormatException e) {
                valido = false;
            }
        }
        if (!valido) {
            FacesMessage msg = new FacesMessage("Erro de validação", "Valor deve ser maior ou igual a zero");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }
    }

}

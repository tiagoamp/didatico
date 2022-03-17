package com.biblioteca.converter;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.DateTimeConverter;
import javax.faces.convert.FacesConverter;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@FacesConverter("MeuLocalDateConverter")
public class LocalDateConverter extends DateTimeConverter implements Converter {

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Override
    public Object getAsObject(FacesContext facesContext, UIComponent uiComponent, String s) {
        if (s == null || s.isEmpty())
            return null;
        LocalDate localDate = LocalDate.parse(s, formatter);
        return localDate;
    }

    @Override
    public String getAsString(FacesContext facesContext, UIComponent uiComponent, Object o) {
        if (o == null)
            return null;
        LocalDate localDate = (LocalDate) o;
        String str = localDate.format(formatter);
        return str;
    }

}

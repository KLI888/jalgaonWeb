import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [closeForm, setCloseForm] = useState(true);
    const [closeSpecial, setCloseSpecial] = useState(true)
    return (
        <FormContext.Provider value={{ closeForm, setCloseForm, closeSpecial, setCloseSpecial }}>
            {children}
        </FormContext.Provider>
    );
};

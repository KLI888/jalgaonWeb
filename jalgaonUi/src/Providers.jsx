import React from 'react';
import { FormProvider } from './context/FormContext'; // Update the path as needed
import { UserProvider } from './context/UserContext';
import { LoginProvider } from './context/LoginContext';

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <LoginProvider >
                <FormProvider>
                    {children}
                </FormProvider>
            </LoginProvider>
        </UserProvider>
    );
};

export default Providers;

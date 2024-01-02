import React, { createContext, useState } from 'react';

export const FinancialContext = createContext();

export function FinancialProvider({ children }) {
    const [financialData, setFinancialData] = useState({});

    const updateFinancialData = (newData) => {
        setFinancialData((prevData) => ({ ...prevData, ...newData }));
    };

    return (
        <FinancialContext.Provider value={{ financialData, updateFinancialData }}>
            {children}
        </FinancialContext.Provider>
    );
};
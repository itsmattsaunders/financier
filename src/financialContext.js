import React, { createContext, useState } from 'react';

const initialState = {
  "financialOverview": {
    "income": [],
    "assets": [],
    "liabilities": [],
    "financialScoreNew": {},
    "financialScoreOld": {}
  }
}

export const FinancialContext = createContext();

export function FinancialProvider({ children }) {
    const [financialData, setFinancialData] = useState(initialState);

    const updateFinancialData = (newData, category) => {
        setFinancialData(prevState => ({
            ...prevState,
            financialOverview: {
              ...prevState.financialOverview,
              [category]: [...prevState.financialOverview[category], newData] 
            }
        }));
    };

    return (
        <FinancialContext.Provider value={{ financialData, updateFinancialData }}>
            {children}
        </FinancialContext.Provider>
    );
};
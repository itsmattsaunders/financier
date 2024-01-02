import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FinancialProvider } from './financialContext.js'; 
import App from './app.js';
import './styles/styles.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <FinancialProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FinancialProvider>
);

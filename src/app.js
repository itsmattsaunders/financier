import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FinancialContext } from './financialContext.js'; 
import Nav from './components/navigation/nav.js';
import HomePage from './components/pages/homePage.js';
import Overview from './components/pages/overView.js';
import Footer from './components/navigation/footer.js';

const App = () => {

  const { financialData } = useContext(FinancialContext);
  // Maybe not a good use, but this way I can check when the context updates
  useEffect(() => {
    console.log("The financial data has updated");
    console.table(financialData)
  }, [financialData]);


  return (
    <>
        <Nav />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
          </Routes>
        <Footer />
    </>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/nav.js';
import HomePage from './components/pages/homePage.js';
import Overview from './components/pages/overView.js';
import Footer from './components/navigation/footer.js';

const App = () => {
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

import React from 'react';
import Nav from './components/navigation/nav.js';
import StatsHeader from './components/dashboard/statsHeader.js';
import Footer from './components/navigation/footer.js';

const App = () => {
  return (
    <>
      <Nav />
      <StatsHeader />
      <Footer />
    </>

  );
};

export default App;

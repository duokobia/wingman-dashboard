import React from 'react';

import './App.css';
// import Header from './components/Header';
import SideNav from './components/SideNav';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="flex">
      <SideNav />
      <MainSection />
    </div>
  );
}

export default App;

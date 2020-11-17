import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

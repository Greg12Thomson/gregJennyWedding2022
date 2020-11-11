import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;

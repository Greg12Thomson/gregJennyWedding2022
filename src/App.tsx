import React from "react";

import './App.css';
import NavBar from './components/NavBar';
// import {VipHeader, VipContent} from './components/Vip';
import Footer from './components/Footer';

function App() {
  return (
    // once VIP is done!
    <div className="App">
      <NavBar />
      <Footer />
    </div>

    // <div className="App">
    //   <>
    //     <VipHeader />
    //     <VipContent />
    //   </>
    // </div>
  );
}

export default App;

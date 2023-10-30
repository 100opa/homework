import '../App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './views/Commons/Header';
import Cart from './views/Cart/Cart';
import Main from './views/Main/Main';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/login" element={<Search />} /> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App
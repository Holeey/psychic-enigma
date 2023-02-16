import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Brand from './components/brand/Brand';
import Partnership from './components/partnership/Partnership';
import Peep from './components/peep/Peep';
import Disbursement from './components/disbursement/Disbursement';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Brand />
      <Partnership />
      <Peep />
      <Disbursement />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

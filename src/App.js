import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Welcome from './Welcome/Welcome'
import Hype from './Hype/Hype'

function App() {
  //really
  return (
    <main>
      <h1>This is a test site</h1>
      <Header />
      <Welcome />
      <Hype />
    </main>
  );
}

export default App;

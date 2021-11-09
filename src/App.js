import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AppRouter from './components/AppRouter'

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Home />
    </div>
  );
}

export default App;

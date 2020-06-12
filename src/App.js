import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/AppBar';
import SimpleModal from './components/Modal';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <SimpleModal />
    </div>
  );
}

export default App;

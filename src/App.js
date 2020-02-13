import React from 'react';
import logo from './logo.svg';
import './App.css';
import Split from './composition/Split';

function App() {
  return (
    <main className="App">
      <Split className="left">
        This is my split component!
      </Split>
      <Split className="right">
      This is my split component!
      </Split>
    </main>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const hitBackend = () => {
    axios.get('/test')
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <button onClick={hitBackend} type="button">Send request</button>
      </header>

    </div>
  );
}

export default App;

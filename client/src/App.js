import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const hitBackend = (url) => {
    axios.get(url)
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
        <button onClick={() => hitBackend('/test')} type="button">Hit &quot;/test&quot; on backend</button>
        <button onClick={() => hitBackend('/errorHandler')} type="button">Hit &quot;/errorHandler&quot; on backend</button>
      </header>

    </div>
  );
}

export default App;

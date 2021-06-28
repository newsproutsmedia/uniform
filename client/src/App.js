import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [welcome, setWelcome] = useState();
  const [post, setPost] = useState();
  const [responseToPost, setResponseToPost] = useState();

  const getBackend = async (url) => {
    await axios.get(url)
      .then((response) => {
        setWelcome(response.data);
      });
  };

  const postToBackend = async (e) => {
    e.preventDefault();
    const postMessage = { message: post };
    await axios.post('/api/message', postMessage)
      .then((response) => setResponseToPost(response.data.message))
      .catch((error) => {
        setResponseToPost(error.message);
      });
  };

  const handleInputChange = (e) => {
    setPost(e.target.value);
  };

  useEffect(() => {
    getBackend('/api/test/');
  }, [welcome]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To React</h1>
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <p>{welcome}</p>
        <form onSubmit={postToBackend}>
          <label htmlFor="postInput">
            Send POST Request To Server:
            <input
              id="postInput"
              type="text"
              value={post}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">SEND</button>
        </form>
        <p>{responseToPost}</p>
      </header>

    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsApp1 from './jsx1';
import JsApp2 from './jsx2';
import JsApp3 from './jsx3';
import JsApp4 from './jsx4';

function App() {
  return (
    <div>
      <JsApp1 />
      <JsApp2 />
      <JsApp3 />
      <JsApp4 />
    </div>


    /*<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
</div>*/
  );
}

export default App;


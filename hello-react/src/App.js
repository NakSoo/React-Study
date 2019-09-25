import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsApp1 from './jsx1';
import JsApp2 from './jsx2';
import JsApp3 from './jsx3';
import JsApp4 from './jsx4';
import JsApp5 from './jsx5';
import JsApp6 from './jsx6';
//import JsApp7 from './jsx7';
import JsApp8 from './jsx8';
import JsApp9 from './jsx9';
import JsApp10 from './jsx10';
import JsApp11 from './jsx11';

function App() {
  return (
    <div>
      <JsApp1 />
      <JsApp2 />
      <JsApp3 />
      <JsApp4 />
      <JsApp5 />
      <JsApp6 />
      {/*<JsApp7 /> 이 예제는 동작하지 않음*/} 
      <JsApp8 />
      <JsApp9 />
      <JsApp10 />
      <JsApp11 />
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


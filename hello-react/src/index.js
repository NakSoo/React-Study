import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import ComponentApp from './ComponentApp';
import EventApp from './EventApp';

//ReactDOM.render(<App />, document.getElementById('root'));  //babel 예제 따라하기
//ReactDOM.render(<ComponentApp/>, document.getElementById('root')); //Component 예제 따라하기
ReactDOM.render(<EventApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

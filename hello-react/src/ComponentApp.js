import React from 'react';
import JsApp1 from './component/jsx1';
import JsApp2 from './component/jsx2';
import JsApp3 from './component/jsx3';
import JsApp4 from './component/jsx4';
import JsApp51 from './component/jsx5-1';
import JsApp6 from './component/jsx6';
import JsApp7 from './component/jsx7';
import JsApp8 from './component/jsx8';
import JsApp9 from './component/jsx9';
import JsApp10 from './component/jsx10';
import JsApp11 from './component/jsx11';
import JsApp12 from './component/jsx12';
import JsApp13 from './component/jsx13';

function ComponentApp() {
    return(
    <>
        <JsApp1/>
        <JsApp2/>
        <JsApp3/>
        <JsApp4/>
        <JsApp51/>
        <JsApp6/>
        <JsApp7 favoriteNumber={1}/>
        <JsApp8/>
        <JsApp9/>
        <JsApp10/>
        <JsApp11/>
        <JsApp12/>
        <JsApp13/>
    </>) ;
}

export default ComponentApp;
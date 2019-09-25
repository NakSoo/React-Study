import React from 'react';

function JsApp6() {
    const name = "리액트";
    return (
        //<div>{name === "리액트" ?  <h1>리액트입니다</h1> : null}</div>
        <div>{name === "리액트" && <h1>리액트입니다</h1>}</div>
    );
}

export default JsApp6;
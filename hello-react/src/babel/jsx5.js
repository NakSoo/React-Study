import React from 'react';

function JsApp5() {
    const name = "뤼액트";

    return (
        <div>
            {name === "리액트" ? (
                <h1>리액트입니다(조건부연산이용)</h1>
            ): (
                <h1>리액트가 아닙니다</h1>
            )}

        </div>
    );
}

export default JsApp5;
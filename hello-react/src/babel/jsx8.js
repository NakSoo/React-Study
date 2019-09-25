import React from 'react';

function JsApp8() {
    const name = "리액트";
    return (
        <div 
            style = {{
                backgroundColor: 'black',
                color: 'aqua',
                fontSize: '48px',
                fontWeight: 'bold',
                padding: 16
            }}>
            {name}
        </div>
    );
}

export default JsApp8;
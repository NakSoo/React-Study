import React from 'react';
import '../App.css';

function JsApp11() {
    const name ='리액트';
    return (
        <>
            {/*주석은 이렇게*/}
            <div
                className="react" //내부에서는 이렇게 가능
            >
                {name}
            </div>
            //이런데는 불가능
            /*여기도 불가능 */
            <input/>
        </>
    );
}

export default JsApp11;
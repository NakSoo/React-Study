import React from "react";

//이 예제는 동작하지 않음...
function JsApp7() {
    const name = undefined;
    return <div>{name || '값이 undefined입니다'}</div>;
}

export default JsApp7();
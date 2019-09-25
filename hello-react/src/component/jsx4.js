import React from 'react';

const JsApp4 = props => {
    return <div>안녕하세요, 제 이름은 {props.name}입니다. </div>;
};

JsApp4.defaultProps = {
    name:'기본 이름'
};

export default JsApp4;
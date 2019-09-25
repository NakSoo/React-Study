import React from 'react';

const JsApp5 = props => {
    return (
        <div>
            안녕하세요, 제 이름은 {props.name}입니다. <br/>
            children 값은 {props.children} 입니다.
        </div>
    );
};

JsApp5.defaultProps = {
    name: '기본이름'
};

export default JsApp5;
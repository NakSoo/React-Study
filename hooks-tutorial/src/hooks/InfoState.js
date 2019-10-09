import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state, //...전개 구문이다. 여러개의 인수를 받을 수 있다.
        [action.name] : action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name : '',
        nickname: ''
    });

    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;

import React, {Component} from 'react';

class JsApp10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={()=> {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1 //이전의 상태를 가져옴
                            };
                        });
                    }}
                    >
                        +1
                    </button>
            </div>
        )
    }

}

export default JsApp10;
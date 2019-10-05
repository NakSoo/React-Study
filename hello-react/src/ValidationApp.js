import React, {Component} from 'react';

import Validation from './ref/validation';
import ScrollBox from './ref/ScrollBox';

class  ValidationApp extends Component {
    render() {
        return(
            <>
                <Validation/>
                <ScrollBox ref={(ref) => this.scrollBox=ref}/>
                <button onClick={()=> this.scrollBox.scrollToBottom()}>
                    맨 밑으로
                </button>
            </>
        );
    }
    
}

export default ValidationApp;
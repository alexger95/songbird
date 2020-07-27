import React from 'react';

import '../../App.scss';

export default class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <>
                <ul class="answer-list">
                    {this.props.children}
                </ul>
            </>
        )
    }
} 
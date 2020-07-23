import React from 'react';

import birdsData from '../assets/birdsData'

import '../../App.scss';

export default class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
        }
    }

    renderAnswers(questionNumber) {
        return birdsData[questionNumber].map((answer, index) => {
        return <li>{`#${index} ${answer.name}`}</li>;
        })
    }


    render() {
        return(
            <>
                <h1>Answers</h1>
                <ul>
                    {this.renderAnswers(this.state.questionNumber)}
                </ul>
            </>
        )
    }
} 
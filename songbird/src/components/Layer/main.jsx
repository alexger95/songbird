import React from 'react';

import '../../App.scss';

import Header from '../block/Header';
import AudioPlayer from '../block/AudioPlayer';
import Answers from '../block/Answers';

import birdsData from '../assets/birdsData';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            trueAnswerNumber: 1,
        };
    }

    renderAnswersList(questionNumber) {
        return birdsData[questionNumber].map((answer, index) => {
            console.log(answer);
        return <li><span class="answer grey">&bull;</span>{`#${index} ${answer.name}`}</li>;
        })
    }

    returnAudioUrl(questionNumber, audioNumber) {
        return birdsData[questionNumber][audioNumber].audio;
    }

    returnImageUrl(questionNumber, imageNumber) {
        return birdsData[questionNumber][imageNumber].image;
    }

    returnName(questionNumber, nameNumber) {
        return birdsData[questionNumber][nameNumber].name;
    }


    render() {
        return(
            <>
            <Header/>
            <AudioPlayer
                audioUrl = {this.returnAudioUrl(this.state.questionNumber, this.state.trueAnswerNumber)}
                imageUrl = {this.returnImageUrl(this.state.questionNumber, this.state.trueAnswerNumber)}
                name = {this.returnName(this.state.questionNumber, this.state.trueAnswerNumber)}
            />
            <Answers>
                {this.renderAnswersList(this.state.questionNumber)}
            </Answers>
            <h1>SongBird body</h1>
            </>
        )
    }
} 
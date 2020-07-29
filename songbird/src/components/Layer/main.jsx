import React from 'react';

import '../../App.scss';

import Header from '../block/Header';
import AudioPlayer from '../block/AudioPlayer';
import Answers from '../block/Answers';
import BirdInfo from '../block/BirdInfo';
import ButtonNextLevel from '../block/ButtonNextLevel';

import birdsData from '../assets/birdsData';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            trueAnswerNumber: 2,
            answers: [0, 0, 1, 0, 0, 0],
            lastSelectAnswer: undefined,
        };
    }
    
    answerStyle(number) {
      if( this.state.answers[number] === 0) {
        return `answer grey`;
      }
      if( this.state.answers[number] === 1) {
        return `answer red`;
      }
      return `answer green`;      
    }

    renderAnswersList(questionNumber) {
        return birdsData[questionNumber].map((answer, index) => {
            console.log(answer);
        return (
          <div className="col-sm2">
            <li id={index + 1} onClick={(event) => this.answerClickReducer(event.currentTarget.id)}>
              <span className={this.answerStyle(index)}>&bull;</span>
              {`#${index + 1} ${answer.name}`}
              </li>
          </div>
        )
        
        })
    }

    returnAudioUrl(questionNumber, audioNumber) {
      console.log(birdsData, questionNumber, audioNumber)
        return birdsData[questionNumber][audioNumber].audio;
    }

    returnImageUrl(questionNumber, imageNumber) {
        return birdsData[questionNumber][imageNumber].image;
    }

    returnName(questionNumber, nameNumber) {
        return birdsData[questionNumber][nameNumber].name;
    }

    randomAnswer() {
      let rand = 0.5 + Math.random() * (6);
      return Math.round(rand);
    }

    answerClickReducer(clickedId) {
      if(this.state.questionNumber === 5) {
        console.log('end of game')
      }
        if(+clickedId === (this.state.trueAnswerNumber + 1)) {
          console.log("true")
            this.setState({
              questionNumber: this.state.questionNumber + 1, 
              trueAnswerNumber: this.randomAnswer() - 1,
              lastSelectAnswer: +clickedId,
            });
        }
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
            <div className="row">
            <Answers>
                {this.renderAnswersList(this.state.questionNumber)}
            </Answers>
            <BirdInfo
              info = {birdsData[this.state.questionNumber]}
              lastSelectAnswer = {this.state.lastSelectAnswer}
            />
            </div>  
            <ButtonNextLevel/>          
            </>
        )
    }
} 
import React from "react";

import "../../App.scss";

import Header from "../block/Header";
import AudioPlayer from "../block/AudioPlayer";
import Answers from "../block/Answers";
import BirdInfo from "../block/BirdInfo";
import ButtonNextLevel from "../block/ButtonNextLevel";
import ScoreDisplay from "../block/ScoreDisplay";

import birdsData from "../assets/birdsData";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      trueAnswerNumber: 2,
      answers: [0, 0, 0, 0, 0, 0],
      lastSelectAnswer: false,
      score: 0,
      falseAnswers: 0,
      modalToggle: false,
    };
  }

  answerStyle(number) {
    if (this.state.answers[number] === 0) {
      return `answer grey`;
    }
    if (this.state.answers[number] === 1) {
      return `answer red`;
    }
    return `answer green`;
  }

  renderAnswersList(questionNumber) {
    return birdsData[questionNumber].map((answer, index) => {
      //console.log(answer);
      return (
        <div className="col-sm12">
          <li
            id={index + 1}
            onClick={(event) => this.answerClickReducer(event.currentTarget.id)}
          >
            <span className={this.answerStyle(index)}>&bull;</span>
            {`#${index + 1} ${answer.name}`}
          </li>
        </div>
      );
    });
  }

  returnAudioUrl(questionNumber, audioNumber) {
    //console.log(birdsData, questionNumber, audioNumber);
    return birdsData[questionNumber][audioNumber].audio;
  }

  returnImageUrl(questionNumber, imageNumber) {
    return birdsData[questionNumber][imageNumber].image;
  }

  returnName(questionNumber, nameNumber) {
    return birdsData[questionNumber][nameNumber].name;
  }

  randomAnswer() {
    let rand = 0.5 + Math.random() * 6;
    return Math.round(rand);
  }

  colorList(clickedId, answerType) {
    let arr;
    if(answerType === false) {
      arr = this.state.answers;
      arr[clickedId - 1] = 1;
      this.setState({answers: arr})
    } else {
      arr = this.state.answers;
      arr[clickedId - 1] = 2;
      this.setState({answers: arr})
    }
    
  }

  answerClickReducer(clickedId) {    
    if (this.state.questionNumber === 5) {
      console.log("last raund");
      
    }
    if (+clickedId === this.state.trueAnswerNumber + 1) {
      if (this.state.questionNumber === 5) {
        this.setState({
      score: this.state.score + (5 - this.state.falseAnswers),
    });
        this.displayStats();
        return
      }
      this.trueAnswerReducer(clickedId);
      return 'true answer commit'
    } else {
      this.falseAnserReducer(clickedId);
      return 'false answer commit'
    } 
  }

  trueAnswerReducer(clickedId) {
    console.log("true");
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      trueAnswerNumber: this.randomAnswer() - 1,
      lastSelectAnswer: +clickedId,
      score: this.state.score + (5 - this.state.falseAnswers),
      falseAnswers: 0,
    });
    this.colorList(+clickedId, true);
  }

  falseAnserReducer(clickedId) {
    console.log("true");
    this.setState({
      falseAnswers: this.state.falseAnswers + 1,
    });
    this.colorList(+clickedId, false);
  }

  modalToggle() {
    this.setState({modalToggle: !this.state.modalToggle})
  }

  displayStats() {
    this.modalToggle();
  }

  render() {
    return (
      <>
       <ScoreDisplay 
        modal={this.state.modalToggle} 
        toggle={() => this.modalToggle()} 
        buttonLabel="modal" 
        className="modal"
        score={this.state.score}
      />
        <Header
          score={this.state.score}
          questionNumber={this.state.questionNumber}
        />
        <AudioPlayer
          audioUrl={this.returnAudioUrl(
            this.state.questionNumber,
            this.state.trueAnswerNumber
          )}
          imageUrl={this.returnImageUrl(
            this.state.questionNumber,
            this.state.trueAnswerNumber
          )}
          name={this.returnName(
            this.state.questionNumber,
            this.state.trueAnswerNumber
          )}
        />
        <div className="container">
          <Answers>{this.renderAnswersList(this.state.questionNumber)}</Answers>
          <BirdInfo
            info={birdsData[this.state.questionNumber]}
            lastSelectAnswer={this.state.lastSelectAnswer}
          />
        </div>
        <ButtonNextLevel buttonDisable={true} />
      </>
    );
  }
}

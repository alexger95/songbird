import React from "react";

import "../../App.scss";

import Header from "../block/Header";
import AudioPlayer from "../block/AudioPlayer";
import Answers from "../block/Answers";
import BirdInfo from "../block/BirdInfo";
import ButtonNextLevel from "../block/ButtonNextLevel";
import ScoreDisplay from "../block/ScoreDisplay";
import BackgroundVideo from '../block/BackgroundVideo';

import birdsData from "../assets/birdsData";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.setAudioPlayerRef = element => this.audioPlayerUnit = element
    this.state = {
      questionNumber: 0,
      trueAnswerNumber: this.randomAnswer() - 1,
      answers: [0, 0, 0, 0, 0, 0],
      lastSelectAnswer: false,
      score: 0,
      falseAnswers: 0,
      modalToggle: false,
      nextLevelBtn: true,
    };
  }

  pauseSong() {
    if (this.audioPlayerUnit) console.log("audplunit", this.audioPlayerUnit.audioEl.current.pause());
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
      return (
        <div key={index.toString()} className="col-sm12">
          <li
            key={index.toString()}
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
        
      }
      this.trueAnswerReducer(clickedId);
      return 'true answer commit'
    } else {
      this.falseAnserReducer(clickedId);
      return 'false answer commit'
    } 
  }

  trueAnswerReducer(clickedId) {
    if(this.state.nextLevelBtn) {
    this.setState({
      nextLevelBtn: !this.state.nextLevelBtn,
      lastSelectAnswer: +clickedId,
      score: this.state.score + (5 - this.state.falseAnswers),
    });
    this.colorList(+clickedId, true);
    this.pauseSong();
    this.godAudioPlay();
  } else {
    this.setState({lastSelectAnswer: +clickedId,});
  }
}

  falseAnserReducer(clickedId) {
    if(this.state.nextLevelBtn) {
      this.setState({
        falseAnswers: this.state.falseAnswers + 1,
        lastSelectAnswer: +clickedId,
      });
      this.colorList(+clickedId, false);
      this.failAudioPlay();
    } else {
      this.setState({lastSelectAnswer: +clickedId,})
    }    
  }

  modalToggle() {
    this.setState({modalToggle: !this.state.modalToggle})
  }

  displayStats() {
    this.modalToggle();
  }

  godAudioPlay() {
    let audio = new Audio('https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3');
    audio.play();
  }

  failAudioPlay() {
    let audio = new Audio('https://birds-quiz.netlify.app/static/media/error.165166d5.mp3');
    audio.play();
  }

  nextLevel() {
    this.setState({
      nextLevelBtn: !this.state.nextLevelBtn,
      questionNumber: this.state.questionNumber + 1,
      trueAnswerNumber: this.randomAnswer() - 1,
      falseAnswers: 0,
      answers: [0, 0, 0, 0, 0, 0],
      lastSelectAnswer: false,
    })
  }

  newGame() {
    this.setState({
      questionNumber: 0,
      trueAnswerNumber: this.randomAnswer(),
      answers: [0, 0, 0, 0, 0, 0],
      lastSelectAnswer: false,
      score: 0,
      falseAnswers: 0,
      modalToggle: false,
      nextLevelBtn: true,
    })
  }

  render() {
    return (
      <>
      {window.screen.width > 960 ? <BackgroundVideo/> : null }
           
       <div className="cover">
       <ScoreDisplay 
        modal={this.state.modalToggle} 
        toggle={() => this.modalToggle()} 
        buttonLabel="modal" 
        className="modal"
        score={this.state.score}
        newGame={() => this.newGame()}
      />
        <Header
          score={this.state.score}
          questionNumber={this.state.questionNumber}
        />
        <AudioPlayer
          setAudioPlayerRef={this.setAudioPlayerRef}
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
            this.state.trueAnswerNumber,            
          )}
          showAnswer={this.state.nextLevelBtn}
        />
        <div className="container">
          <div className="row">
          <Answers>{this.renderAnswersList(this.state.questionNumber)}</Answers>
          <BirdInfo
            info={birdsData[this.state.questionNumber]}
            lastSelectAnswer={this.state.lastSelectAnswer}
            getAudioUrl={this.returnAudioUrl}
          />
          </div> 
                   
        </div>
        <ButtonNextLevel nextLevel={() => this.nextLevel()} buttonDisable={this.state.nextLevelBtn} />
       </div>
      
      </>
    );
  }
}

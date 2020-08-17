import React from "react";

import "../../App.scss";
import ReactAudioPlayer from "react-audio-player";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BirdNone from './bird.none.jpg';

const BirdPicture = (props) => {
  if (!props.secret) {
  return <img className="image-bird" src={props.imageUrl} alt="bird"></img>;
  }
  return <img className="image-bird" src={BirdNone} alt="bird"></img>;
};

const BirdName = (props) => {
  if (props.secret) {
    return <h2>{props.name}</h2>;
  }
  return <h2>*********</h2>;
};

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {};
  }

  render() {
    
    return (
      <>
        <Container>
          <Row className='bg-dark-light audio border-block'>
            <div className="col-md-12 col-lg-6">              
              <BirdPicture imageUrl={this.props.imageUrl} secret={this.props.showAnswer}/>              
            </div>
            <div className="col-md-12 col-lg-6">
              <BirdName name={this.props.name} secret={this.props.showAnswer} />
              <ReactAudioPlayer src={this.props.audioUrl} controls />
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

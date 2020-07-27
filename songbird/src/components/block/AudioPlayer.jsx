import React from "react";

import "../../App.scss";
import ReactAudioPlayer from "react-audio-player";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BirdPicture = (props) => {
  return <img class="image-bird" src={props.imageUrl}></img>;
};

const BirdName = (props) => {
  return <h2>{props.name}</h2>;
};

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>              
              <BirdPicture imageUrl={this.props.imageUrl} />              
            </Col>
            <Col>
              <BirdName name={this.props.name} />
              <ReactAudioPlayer src={this.props.audioUrl} autoPlay controls />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

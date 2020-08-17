import React from "react";

import "../../App.scss";

import ReactAudioPlayer from "react-audio-player";

const BirdPicture = (props) => {
  return <img className="image-bird" src={props.imageUrl} alt="bird"></img>;
};

export default class BirdInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  noBirdClicked() {
    return (
      <>
        <div className="col-12 col-lg-6 bg-dark-light border-block">
          Выберите вариант ответа
        </div>
      </>
    );
  }

  birdClicked(id) {
    console.log(this.props);
    return (
      <>
        <div className="col-12 col-lg-6 bg-dark-light border-block">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="col-12">
                <BirdPicture imageUrl={this.props.info[id - 1].image} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="col-12">{this.props.info[id - 1].name}</div>
              <div className="col-12">{this.props.info[id - 1].species}</div>
              <div className="col-12">
                <ReactAudioPlayer
                  src={this.props.info[id - 1].audio}
                  controls
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">{this.props.info[id - 1].description}</div>
          </div>
        </div>
      </>
    );
  }

  render() {
    if (this.props.lastSelectAnswer === false) {
      return this.noBirdClicked();
    }
    return this.birdClicked(this.props.lastSelectAnswer);
  }
}

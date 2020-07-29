import React from "react";

import "../../App.scss";

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
        <div className="container">
          <div className="row">
            <div className="col-sm">Выберите вариант ответа</div>
          </div>
        </div>
      </>
    );
  }

  birdClicked(id) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm6">
              <div className="col-sm12">
              <BirdPicture imageUrl={this.props.info[id].image} />
              </div>
            </div>
            <div className="col-sm6">
              <div className="row">{this.props.info[id].name}</div>
              <div className="row">{this.props.info[id].species}</div>
              <div className="row">audio</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">{this.props.info[id].description}</div>
          </div>
        </div>
      </>
    );
  }

  render() {  
    if (this.props.lastSelectAnswer === undefined) {
      return this.noBirdClicked();
    }  
    return this.birdClicked(this.props.lastSelectAnswer);
  }
}

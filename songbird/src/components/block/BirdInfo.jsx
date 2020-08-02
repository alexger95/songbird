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
        <div className="container bg-dark">
          <div className="row">
            <div className="col">Выберите вариант ответа</div>
          </div>
        </div>
      </>
    );
  }

  birdClicked(id) {
    return (
      <>
        <div className="col-sm6 bg-dark">
          <div className="col-sm12">
            <div className="col-sm6">
              <div className="col-sm12">
              <BirdPicture imageUrl={this.props.info[id-1].image} />
              </div>
            </div>
            <div className="col-sm6">
              <div className="col-sm12">{this.props.info[id-1].name}</div>
              <div className="col-sm12">{this.props.info[id-1].species}</div>
              <div className="col-sm12">audio</div>
            </div>
          </div>
          <div className="col-sm12">
            <div className="col-sm">{this.props.info[id-1].description}</div>
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

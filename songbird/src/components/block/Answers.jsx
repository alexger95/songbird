import React from "react";

import "../../App.scss";

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <div className="col-12 col-lg-6">
              <ul className="answer-list bg-dark-light border-block">{this.props.children}</ul>
        </div>
      </>
    );
  }
}

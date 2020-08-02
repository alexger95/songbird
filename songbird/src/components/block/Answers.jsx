import React from "react";

import "../../App.scss";

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="col-sm6">
              <ul className="answer-list bg-dark">{this.props.children}</ul>
        </div>
      </>
    );
  }
}

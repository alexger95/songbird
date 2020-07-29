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
        <div className="container">
              <ul className="answer-list row">{this.props.children}</ul>
        </div>
      </>
    );
  }
}

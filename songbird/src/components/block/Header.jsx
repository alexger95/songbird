import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../../App.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  typeArray = ['Разминка', 'Воробьиные', 'Лестные птицы', 'Певчие птицы', 'Хищьные птицы', 'Морские птицы'];

  renderLink(questionNumber) {
    return (
    this.typeArray.map(
      (element, index) => {
        if (questionNumber===index) {
          return <Nav.Link active href={"#answer" + index}>{element}</Nav.Link>
        }
        return <Nav.Link  href={"#answer" + index}>{element}</Nav.Link>
      }      
    ))
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">SongBird</Navbar.Brand>
          <Nav className="mr-auto">
            {this.renderLink(this.props.questionNumber)}
          </Nav>
          <Navbar.Text>
            <label>
              Score: {this.props.score}
            </label>
          </Navbar.Text>          
        </Navbar>
      </>
    )
  }
} 
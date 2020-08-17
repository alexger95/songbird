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
          return <li className="page-item"><Nav.Link key={index + 1} active href={"#answer" + index}>{element}</Nav.Link></li>
        }
        return <li className="page-item"><Nav.Link key={index + 1} href={"#answer" + index}>{element}</Nav.Link></li>
      }      
    ))
  }

  render() {
    return (
      <>      
        <Navbar className="bg-dark-strong" variant="dark">
        <div>
        <Navbar.Brand href="#home">SongBird</Navbar.Brand>          
          <Navbar.Text>
            <label>
              Очки: {this.props.score}
            </label>
          </Navbar.Text>    
        </div>
          <div>
          <Nav className="mr-auto">
            <ul className="pagination">
            {this.renderLink(this.props.questionNumber)}
            </ul>            
          </Nav> 
          </div>
               
        </Navbar>
      </>
    )
  }
} 
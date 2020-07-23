import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';





import '../../App.scss';

export default class Header extends React.Component {


  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">SongBird</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#warmup">Разминка</Nav.Link>
            <Nav.Link href="#passerines">Воробьиные</Nav.Link>
            <Nav.Link href="#forestbirds">Лестные птицы</Nav.Link>
            <Nav.Link href="#songbirds">Певчие птицы</Nav.Link>
            <Nav.Link href="#hanterbirds">Хищьные птицы</Nav.Link>
            <Nav.Link href="#seabirds">Морские птицы</Nav.Link>
          </Nav>
          <Navbar.Text>
            Score: 11
          </Navbar.Text>          
        </Navbar>
        
        <nav>
          <h1>SongBird</h1>
          <p></p>
          <ul>
            <li><a>Разминка</a></li>
            <li><a>Воробьиные</a></li>
            <li><a>Лестные птицы</a></li>
            <li><a>Певчие птицы</a></li>
            <li><a>Хищьные птицы</a></li>
            <li><a>Морские птицы</a></li>
          </ul>
        </nav>
      </>
    )
  }
} 
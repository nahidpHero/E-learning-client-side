import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';



const Header = () => {
    const {user}=useContext(AuthContext)
    console.log(user.displayName)
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/home' className='nav-item'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/courses'  className='nav-item'>Courses</Link></Nav.Link>
            <Nav.Link><Link to='/faq'  className='nav-item'>FAQ</Link></Nav.Link>
            <Nav.Link><Link to='/blog'  className='nav-item'>Blog</Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link to='/login' className='nav-item'>Login</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user.displayName}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
        </div>
    );
};

export default Header;
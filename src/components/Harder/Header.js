import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import {FaUser} from 'react-icons/fa';
import { Button, Image} from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import CopyToClipboard from "react-copy-to-clipboard";
import { useRef } from 'react';



const Header = () => {
    const {user,logout}=useContext(AuthContext)
    const tooltip = useRef()

    const handleLogOut=()=>{
      logout()
      .then(()=>{
        //successfuly logout
      }) 
      .catch(error=>{
        //error
      })
    }




    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
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
            <Nav.Link>
            {
              user?.uid?
              <>
                <Image data-tip data-for={`register${user.displayName}`} style={{height:'40px'}} roundedCircle src={user.photoURL}></Image>
                <>
                <ReactTooltip
                clickable
                ref={tooltip}
                className="tooltip"
                id={`register${user.displayName}`}
                place="top"
                effect="solid"
                delayHide={100}
                 >
                <>
                <CopyToClipboard text="This is a test">
                <div>{user.displayName}</div>
               </CopyToClipboard>
                </>
                </ReactTooltip>
                </>
              </>
              :
              <FaUser></FaUser>
            }
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
            {
              user?.uid?
              <>
              {
               <Button onClick={handleLogOut}>LogOut</Button>
              }
              </>
              :
              <Link to="/login"><Button>LogIn</Button></Link>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
        </div>
    );
};

export default Header;
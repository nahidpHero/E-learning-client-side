import React from 'react';
import "./ChackoutPage.css"
import { useContext } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';

const ChackoutPage = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <Row>
                <Col>
                  <div className='profile'>
                  <h1>Name: {user.displayName}</h1>
                  <h3>Email: {user.email}</h3>
                  {
                     user?.uid?
                    <Image style={{height:'300px'}} src={user.photoURL}></Image>
                    :
                    <Image style={{height:'300px'}} src='https://www.pngfind.com/pngs/m/639-6396015_shadow-man-png-shadow-of-person-transparent-png.png'></Image>
                  }
                  </div>
                  <div className='btn'>
                  <Button variant='primary'>Complete Your Prement</Button>
                  </div>
                </Col>
                <Col>
                </Col>
            </Row>
            
        </div>
    );
};

export default ChackoutPage;
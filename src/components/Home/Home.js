import React from 'react';
import './Home.css'
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentPage from '../Studentpage/StudentPage';
import Explore from '../ExplorePage/Explore';



const Home = () => {
    return (
        <div className='home-style'>
            <Row>
                <Col lg="6">
                <div className='home-text'>
                   <h1>E-learning</h1>
                   <h3>Get Started Digital Learning</h3>
                   <h5>Join today to access over 18,000 courses taught by industry experts or purchase this course individually.</h5>
                   <Button variant="primary"><Link to="/courses">Get Started</Link> </Button>
                </div>
                </Col>
                <Col lg="6">
                    <div>
                    <img className="featurette-image img-fluid mx-auto" src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1666849654~exp=1666850254~hmac=858b7586b823d5239204a01e4a01abace197b203e25e38ae0141685817beed9f' alt="Logo" />;
                    </div>
                </Col>
            </Row>
       <Explore></Explore>
      <StudentPage></StudentPage>
    </div>
    );
};

export default Home;
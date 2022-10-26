import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

const Courses = () => {
    return (
        <div>
            <Row>
                <Col lg="4">
                <LeftSide></LeftSide>
                </Col>
                <Col lg="4">
                 <RightSide></RightSide>
                </Col>
            </Row>
        </div>
    );
};

export default Courses;
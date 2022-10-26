import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardComponent = ({course}) => {
    const{id,name,image,title,price}=course
    return (
        <div className='m-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {title}
        </Card.Text>
        <p>Price:{price}</p>
        <Button variant="black"><Link to={`/course/${id}`}>Details Courses</Link></Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardComponent;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = ({course}) => {
    const{name,image,title}=course
    return (
        <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {title}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardComponent;
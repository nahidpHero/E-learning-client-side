import React from 'react';
import './DetailsPage.css'
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailsPage = () => {
    const detail=useLoaderData()
    const {name,image,title,details}=detail
    console.log(detail)
    return (
       <div className='detail-style'>
        <div className='detail-style' style={{ width: '60%' }}>
     <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            
        </div>
       </div>
    );
};

export default DetailsPage;
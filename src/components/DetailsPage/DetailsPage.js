import React from 'react';
import './DetailsPage.css'
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";


const ref=React.createRef()

const DetailsPage = () => {
    const detail=useLoaderData()
    const {name,image,title,details}=detail
    console.log(detail)
    return (
       <div ref={ref} className='detail-style'>
       <div className='button-style'> <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Downlode PDF</Button>}
      </Pdf></div>  
        <div>
     <Card className='detail-style'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="primary"><Link to="/chackout">Get Premium access</Link> </Button>
      </Card.Body>
    </Card>
      
        </div>
       </div>
    );
};

export default DetailsPage;
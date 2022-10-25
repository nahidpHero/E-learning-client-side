import React from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const photourl=form.photourl.vaule
        const email=form.email.value;
        const password=form.name.value;
        console.log(name,photourl,email,password)
       }
    
    return (
    <div className='form-style'>
     <form onSubmit={handleSignUp}>
     <Form.Group className="mb-3">
        <Form.Label>Name :</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photourl' type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
        </div>
    );
};

export default Register;
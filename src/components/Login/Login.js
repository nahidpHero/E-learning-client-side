import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
   const handleSignin=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.name.value;
    console.log(email,password)
   }

    return (
        <div className='form-style'>
     <form onSubmit={handleSignin}>
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

export default Login;
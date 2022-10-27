import React from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const [errormsg,setErrormsg]=useState('')
    
    const navigate=useNavigate()
    const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const photourl=form.photourl.vaule
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photourl,email,password)
        createUser(email,password)
        .then((result)=>{
            const user=result.user
            console.log(user)
            form.reset()
            navigate('/')
        })
        .catch(error=>{
          console.log(error)
          const message=error.message
          setErrormsg(message)
        })

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
      <p className='text-light'>{errormsg}</p>
    </form>
        </div>
    );
};

export default Register;
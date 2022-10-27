import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import { useState } from 'react';

const Login = () => {
    const [errormg,setErrormg]=useState('')
    const {signUpwithGoogle,login,signInGithub}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()

    const from=location.state?.from?.pathname || '/'



   const handleSignin=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;

    login(email,password)
    .then((userCredential)=>{
        const user=userCredential.user
        console.log(user)
        form.reset()
        navigate(from ,{replace:true})
    })
    .catch(error=>{
        console.error(error)
        const message=error.message
        setErrormg(message)
    })
   }



   const handleGoogleSignUp=()=>{
    signUpwithGoogle()
    .then((result)=>{
        const user=result.user
        console.log(user)
        navigate('/')
    })
    .catch(error=>{
        console.error(error)
    })
   }

   const handleGitHubSignup=()=>{
    signInGithub()
    .then((result)=>{
        const user=result.user
        console.log(user)
        navigate('/')
    })
    .catch(error=>{
        console.error(error)
    })
   }

    return (
    <div className='form-style'>
      <h1>LogIn</h1>
     <form onSubmit={handleSignin}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <p>{errormg}</p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>New to E-learning <Link to='/register'> Create a New Acount?</Link> </p>
    </form>
      <div className='sign-in-button'>
      <div onClick={handleGoogleSignUp}>
        <Button variant="primary" size="lg">
        <FaGoogle/> Signin with Google
        </Button>
      </div>
      <div onClick={handleGitHubSignup}>
        <Button variant="primary" size="lg">
        <FaGithub/> Signin with Github
        </Button>
      </div>
      </div>
    </div>
    );
};

export default Login;
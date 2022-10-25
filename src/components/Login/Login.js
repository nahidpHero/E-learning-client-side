import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';

const Login = () => {
    const {signUpwithGoogle,login,signInGithub}=useContext(AuthContext)



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
    })
    .catch(error=>{
        console.error(error)
    })
   }



   const handleGoogleSignUp=()=>{
    signUpwithGoogle()
    .then((result)=>{
        const user=result.user
        console.log(user)
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
    })
    .catch(error=>{
        console.error(error)
    })
   }

    return (
    <div>
     <form onSubmit={handleSignin} className='form-style'>
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
      <p>Create a acount.<Link to='/register'>Register?</Link> </p>
    </form>
      <div className='sign-in-button'>
      <div onClick={handleGoogleSignUp} className="mb-2">
        <Button variant="primary" size="lg">
        <FaGoogle/> Signin with Google
        </Button>
      </div>
      <div onClick={handleGitHubSignup} className="mb-2">
        <Button variant="primary" size="lg">
        <FaGithub/> Signin with Github
        </Button>
      </div>
      </div>
    </div>
    );
};

export default Login;
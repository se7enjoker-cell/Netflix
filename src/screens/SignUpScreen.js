import React, { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import './SignUpScreen.css'

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(user);
        alert('Sign Up Success')
      
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('Login in')
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
      
  }
  
  return (
    <div className='SignUpScreen'>
      <form onSubmit={signIn}>
        <input ref={emailRef} type='text' placeholder='Email'/>
        <input ref={passwordRef} type='password' placeholder='Password'/>
        <button>Sign In</button>
      </form>
        <h2>
          <span className='signup_gray'> New to Netflix?</span>
          <span className='signup_link' onClick={signUp}>Sign Up Now.</span>
        </h2>
    </div>
  )
}

export default SignUpScreen
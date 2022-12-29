import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'


const LoginScreen = () => {
    const [signIn, setSignIn] =useState(false)
  return (
    <div className='loginScreen'>
        <div className='nav_loginScreen'>
            <img className='nav_logo' src='https://cdn-icons-png.flaticon.com/512/5977/5977590.png'/>
            <button className='button_signin' onClick={() => setSignIn(true)}>Sign In</button>
        </div>
        <div className='background_gradient' />
        <div className='loginScreen_content'>
            {signIn ? <SignUpScreen/> : (
                <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='loginScreen_input'>
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button>Get Started</button>
                    </form>
                </div>
                </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen
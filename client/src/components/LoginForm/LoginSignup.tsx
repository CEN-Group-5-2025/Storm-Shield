import { useState } from 'react'
import './LoginSignup.css'

import email_icon from '../assets/email.png'
import password_icon from '../assets/lock.png'
import user_icon from '../assets/user.png'

export const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false)

  const handleToggle = () => {
    setIsSignup(!isSignup)
  }

  return (
    <div className="background">
      <div className="container">
        <div className="header">
          <div className="text">{isSignup ? 'Sign Up' : 'Login'}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input-box">
            <img src={user_icon} alt="User" className="icon" />
            <input type="text" placeholder="Username" />
          </div>

          {isSignup && (
            <div className="input-box">
              <img src={email_icon} alt="Email" className="icon" />
              <input type="email" placeholder="Email" />
            </div>
          )}

          <div className="input-box">
            <img src={password_icon} alt="Password" className="icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {!isSignup && (
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        )}

        <div className="buttons">
          <button className="btn submit">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </div>

        <div className="switch">
          <p>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
            <span onClick={handleToggle}>
              {isSignup ? ' Login' : ' Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

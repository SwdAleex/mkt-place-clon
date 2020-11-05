import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

import '../Style/login.scss'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const signIn = e => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then (auth => {
        console.log('auth')
        history.push('/')
      })
      .catch(error => {
        console.error(error)
      })
  }


  const register = e => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then( auth => {
        console.log(auth)
        if (auth) {
          history.push('/') // BROWSER HISTORY
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type='submit'
            onClick={signIn}>
              Sign In
          </button>
        </form>
        <p>
          By singing-in you agree to Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Adipisci minima culpa iusto fugit itaque quos?
        </p>

        <button 
          className="login__registerButton"
          onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  )
}

export default Login

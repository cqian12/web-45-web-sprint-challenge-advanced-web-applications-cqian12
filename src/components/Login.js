import React, { useState } from "react";
import axios from "axios";
import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";

const initialState = {
  username:'',
  password:''
}

const Login = (props) => {
  const [creds, setCreds] = useState(initialState)
  
  //replace with error state
  const [error, setError] = useState('')
  
  const inputChange = (e) => {
    setCreds({...creds,[e.target.name]: e.target.value})
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = (e) => {
    e.preventDefault()
    if (creds.username==='Lambda' && creds.password==='School') {
    axios.post('http://localhost:5000/api/login',creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      setError('')
      props.history.push('/bubbles')
    })
    .catch(err => console.log(err))}
    else {setError('Username or Password not valid')}
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Log In Below</h2>
        <form onSubmit={login}>
          <label>Username: </label>
          <input id='username' name='username' type='text' value={creds.username} onChange={inputChange} />
          <label>Password: </label>
          <input id='password' name='password' type='text' value={creds.password} onChange={inputChange} />
          <button id='submit'>Submit</button>
        </form>
      </div>
      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
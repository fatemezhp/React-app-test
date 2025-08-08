import React, { useState } from 'react'
import syl from './Login.module.css'
import axios from 'axios'
function Login() {

  // const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPass, setUserPass] = useState('')
  const [loginError, setLoginError] = useState(false)

  const loginHandler = async () => {
    let params = {
      userEmail: 'eve.holt@reqres.in',
      userPass: 'cityslicka'
    }
    try {

      const response = await axios.post('https://reqres.in/api/login', params);
      console.log('Login successful!');
      const token = response.data.token;
      console.log('Token:', token)
      
      setLoginError(false);
    }
    catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data.error);
        setLoginError(true);
      } else {
        console.error('Error:', error.message);
      }

    }
  }
  return (
    <div className={syl.loginContainer}>
      <div className={syl.form} >
        {/* <label htmlFor="userFullName">full name : <br />
          <input value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            name="userFullName"
            id="userFullName"
          />
        </label> */}
        <label htmlFor="userEmail"> email : <br />
          <input value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
            type="email"
            name="userEmail"
            id="userEmail"
          />
        </label>
        <label htmlFor="userpass">password : <br />
          <input value={userPass}
          onChange={(event) => setUserPass(event.target.value)}
            type="password"
            name="userpass"
            id="userpass"
          />
        </label>
        { loginError &&  <div className={syl.loginError}><p>There is something wrong with Email or password!</p></div>}
        <button onClick={loginHandler}>submit</button>
      </div>
    </div>
  )
}

export default Login
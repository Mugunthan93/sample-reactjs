import * as React from 'react';
import { useState } from 'react';
import './signup.scss';

const Signup = () => {
  let [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const submit = () => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(loginForm);
  };

  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={submit} className="signupform">
      <h1 className="formtitle">Signup Form</h1>
      <div className="inputs">
        <h3>UserName : </h3>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={loginForm.username}
        />
        <h3>Password : </h3>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={loginForm.password}
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Signup;

function SetState() {
  throw new Error('Function not implemented.');
}

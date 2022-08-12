import * as React from 'react';
import './app.scss';
import './style.css';

const App = () => {
  return (
    <form className="signupform">
      <h1 className="formtitle">Signup Form</h1>
      <div className="inputs">
        <h3>UserName : </h3>
        <input type="text" />
        <h3>Password : </h3>
        <input type="password" />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default App;

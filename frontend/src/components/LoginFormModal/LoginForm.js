import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch} from 'react-redux';
import './LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({credential, password}))
      .catch(async res => {
        const data = await res.json();
        if(data.errors) setErrors(data.errors);
      });
  };

  const demoClick = event => {
    event.preventDefault();
    setErrors([]);
    const credential = 'Demo-lition';
    const password = 'password';
    return dispatch(sessionActions.login({credential, password}))
      .catch(async res => {
        const data = await res.json();
        if(data.errors) setErrors(data.errors);
      });
  };

  return (
    <form className='modal-form' onSubmit={onSubmit} id>
      <div className='hoptimist-text-wrapper'>
        <h2 className='hoptimist-text'>HOPtimist</h2>
        <p className='warning'>Please Drink Responsibly</p>
      </div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label id="credentials-modal">
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label id="password-label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" id="login-button">Log In</button>
      <button id="login-button" onClick={demoClick}>Demo User Log In</button>
    </form>
  );
};

export default LoginForm;
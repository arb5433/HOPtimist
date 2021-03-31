import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupFormPage.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/'/>;

  const onSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password and Password must match.']);
  };

  return (
    <form className='modal-form' onSubmit={onSubmit}>
      <div className='hoptimist-text-wrapper'>
        <h2 className='hoptimist-text'>HOPtimist</h2>
        <p className='warning'>Please Drink Responsibly</p>
      </div>
      <ul className='error-display'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className='modal-label'>
        Email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </label>
      <label className='modal-label'>
        Username
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      </label>
      <label className='modal-label'>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </label>
      <label className='modal-label'>
        Confirm Password
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
      </label>
      <button className='signup-btn' type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;
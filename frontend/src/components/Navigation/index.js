import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <h3 className='welcome-msg'>Welcome {sessionUser.username}!</h3>
        <button className='logout-btn' onClick={logout}>Log Out</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
        <SignupFormModal/>
      </>
    );
  }

  return (
    <ul className='navbar-container'>
      <li id="navbar">
        <div className='logo'>
          <img src='https://user-images.githubusercontent.com/74081636/113187950-7472ea00-9227-11eb-99cd-957c08f89c08.jpeg'/>
        </div>
        <div className='home-btn'>
          <NavLink exact to="/" id="home-button">Home</NavLink>
          <h2 className='hoptimist-text-nav'>HOPtimist</h2>
        </div>
        <div className='sessionLinks'>
          {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
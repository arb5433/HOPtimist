import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
        <NavLink to="/signup" id="signup-button">Sign Up</NavLink>
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
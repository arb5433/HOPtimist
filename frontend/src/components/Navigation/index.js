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
          Logo
        </div>
        <div className='home-btn'>
          <NavLink exact to="/" id="home-button">Home</NavLink>
          <h2 className='hoptimist-text'>HOPtimist</h2>
        </div>
        <div className='sessionLinks'>
          {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
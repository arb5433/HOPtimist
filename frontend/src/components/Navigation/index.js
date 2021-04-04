import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState} from 'react';
import {searchBeers} from '../../store/beers';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  const profileClick = (event) => {
    event.preventDefault();
    history.push('/users/profile');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchBeers({query: search}));
    history.push('/beers/search');
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <button className='new-logout-btn' onClick={logout}>Log Out</button>
        <button className='profile-icon' onClick={profileClick}>
          <i className="fas fa-beer"></i>
        </button>
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
          <img src='https://user-images.githubusercontent.com/74081636/113187950-7472ea00-9227-11eb-99cd-957c08f89c08.jpeg' alt='logo'/>
        </div>
        <div className='home-btn'>
          <NavLink exact to="/" id="home-button" className='new-home-button-name'>Home</NavLink>
          <h2 className='hoptimist-text-nav'>HOPtimist</h2>
        </div>
        <form className='search-form' onSubmit={handleSubmit}>
          <input className='search-input' value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search for a Beer'/>
          <button className='search-icon' type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
        <div className='sessionLinks'>
          {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
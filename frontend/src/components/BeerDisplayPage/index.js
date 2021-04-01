import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {getBeers} from '../../store/beers';

import BeerCard from '../BeerCard/index';

import './BeerDisplay.css'


const BeerDisplayPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBeers());
  },[dispatch])

  
  const beers = useSelector(state => {
    return state.beer.beers;
  });

  const user = useSelector(state => {
    return state.session.user;
  });

  const beerClickHandler = () => {
    if(user) history.push('/beers');
    else alert ('Please login or create an account to add a new beer.')
  }

  return (
    <div className='beer-display-page'>
      <img className='banner' src='https://user-images.githubusercontent.com/74081636/113198408-dfc2b900-9233-11eb-9e62-da36b528a433.png'/>
      <div className='beer-display-head'>
        <h2 className='browse'>Browse for Beers: </h2>                     
      </div>
      <div className='beer-cards-display'>
        {beers.map(beer => <BeerCard key={beer.id} beer={beer}/>)}
      </div>
      <div className='add-beer-btn-wrapper'>
          {/* <NavLink class='add-beer-btn' to='/beers'>Add a new beer</NavLink> */}
          <button className='add-beer-btn' onClick={beerClickHandler}>Add a new beer</button>
      </div>
    </div>
  );
};

export default BeerDisplayPage;
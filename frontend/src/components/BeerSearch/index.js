import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import BeerCard from '../BeerCard';

import './BeerSearch.css'

const BeerSearch = () => {
  const history = useHistory();

  const beers = useSelector(state => {
    return state.beer.beersList.map(beerId => state.beer[beerId]);
  });

  const user = useSelector(state => {
    return state.session.user;
  });

  const beerClickHandler = () => {
    if(user) history.push('/beers');
    else alert ('Please login or create an account to add a new beer.')
  };

  if(beers.length){
    return (
      <div className='search-page-wrapper'>
        <div className='search-cards-wrapper'>
          {beers.map(beer => {
            return <BeerCard beer={beer}/>
          })}
        </div>
        <p className='can-not-find'>Can not find the beer you are looking for? Please add it to our list below.</p>
        <div className='abb-wrapper'>
            <button className='add-beer-btn' onClick={beerClickHandler}>Add a new beer</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='empty-wrapper'>
        <div className='empty-banner'/>
        <p className='can-not-find'>Could not find searched beer, would you like to add it to our list?</p>
        <div className='abb-wrapper'>
            <button className='add-beer-btn' onClick={beerClickHandler}>Add a new beer</button>
        </div>
      </div>
    )
  }
};

export default BeerSearch;
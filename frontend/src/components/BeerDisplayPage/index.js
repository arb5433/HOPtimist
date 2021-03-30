import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {getBeers, getStyles} from '../../store/beers';

import BeerCard from '../BeerCard/index';


const BeerDisplayPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBeers());
    dispatch(getStyles());
  },[dispatch])

  
  const beers = useSelector(state => {
    return state.beer.beers;
  });

  return (
    <div>
      <p>This is the BeerDisplayPage</p>
      <h2>All the beers</h2>
      <div>
        {beers.map(beer => <BeerCard key={beer.id} beer={beer}/>
        )}
      </div>
      <div>
          <NavLink to='/beers'>Add a new beer</NavLink>
      </div>
    </div>
  );
};

export default BeerDisplayPage;
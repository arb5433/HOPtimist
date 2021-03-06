import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getStartingBeers} from '../../store/beers';
import BeerCard from '../BeerCard/index';

import './BeerDisplay.css'
import { NavLink } from 'react-router-dom';


const BeerDisplayPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStartingBeers());
  },[dispatch])

  const sortList = (list) => {
    return list.sort((beerA, beerB) => {
      return beerB.id - beerA.id;
    });
  };
  
  const unOrderedBeers = useSelector(state => {
    return state.beer.beersList.map(beerId => state.beer[beerId]);
  });

  const beers = sortList(unOrderedBeers);

  return (
    <div className='beer-display-page'>
      {beers && <div className='beer-display-page'>
        <img className='banner' src='https://user-images.githubusercontent.com/74081636/113198408-dfc2b900-9233-11eb-9e62-da36b528a433.png' alt='banner'/>
        <div className='beer-display-head'>
          <h2 className='browse'>Browse for Beers: </h2>                     
        </div>
        <div className='beer-cards-display'>
          {beers && beers.map(beer => <BeerCard key={beer.id} beer={beer}/>)}
        </div>
        <NavLink className='load-all-beers' to='/all'>Load more beers</NavLink>
      </div>}
    </div>
  );
};

export default BeerDisplayPage;
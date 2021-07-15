import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getBeers } from '../../store/beers';
import BeerCard from '../BeerCard/index';

const TopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch]);

  const allBeers = useSelector(state => {
    return state.beer.beersList.map(beerId => state.beer[beerId]);
  });

  const beers = null;

  // sort the beers by their ratings

  return (
    <div>
      <div>Top Rated Beers</div>
      <div>
        <div>Beers</div>
        <div>Breweries</div>
      </div>
      <div>explanation of ratings for beers/ explaining that brews are a wip</div>
      <div>
        {/* filters added in here for style and countries */}
        <div className='beer-cards-display'>
          {beers && beers.map(beer => <BeerCard key={beer.id} beer={beer}/>)}
        </div>
      </div>
    </div>
  );
}

export default TopRated;

// steps to change how the ratings are calculated and save it for each
// step 1) add ratings into the store
// step 2) pull all reviews for all beers (only need ratings off reviews)
// step 3) store them in the store as an object i.e. ratings = {beerId : [...ratings]}
// use this state to change how the reviews render on the pages and it should fix it 
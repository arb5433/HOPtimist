import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import BeerCard from '../BeerCard';

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
    console.log('********************* FOUND RESULTS ******************')
    return (
      <div>
        {beers.map(beer => {
          return <BeerCard beer={beer}/>
        })}
      </div>
    )
  } else {
    return (
      <div>
        <div>Image of an empty glass</div>
        <p>Could not find searched beer, would you like to add it to our list?</p>
        <div className='add-beer-btn-wrapper'>
            <button className='add-beer-btn' onClick={beerClickHandler}>Add a new beer</button>
        </div>
      </div>
    )
  }
};

export default BeerSearch;
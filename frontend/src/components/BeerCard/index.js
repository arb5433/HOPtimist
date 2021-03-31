import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {deleteBeer} from '../../store/beers'

import './BeerCard.css'

const BeerCard = ({beer}) => {
  const dispatch = useDispatch();
  const [there, setThere] = useState(true);

  const user = useSelector(state => {
    return state.session.user;
  });


  const deleteClick = event => {
    dispatch(deleteBeer(beer.id));
    setThere(false);
  }
  return (
    <div className='beer-card-wrapper'>
      {there && (
      <div className='beer-card-wrapper'>
          <NavLink className='beer-card-wrapper beer-card-link' to={`/beers/${beer.id}`}>
            <h2 className='beer-card-name'>{beer.name}</h2>
            <div className='brew-style-wrapper'>
              <p className='brew-style'>Brewery: {beer.Brewery.name}</p>
              <p className='brew-style'>Style: {beer.BeerStyle.style}</p>
            </div>
            <div className='beer-card-description'>{beer.description}</div>
            <div className='beer-card-specs'>ABV: {beer.abv} | IBU: {beer.ibu}</div>
          </NavLink>
          <div>
            {user && (
              <div>
                {user.id === beer.userId && (
                  <div>
                    <button onClick={deleteClick}>Delete</button>
                    <button>Edit</button>
                  </div>
                )}
              </div>
            )}
          </div>
      </div>
      )}
    </div>
  )
};

export default BeerCard;
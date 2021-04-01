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

  let created = beer.createdAt;
  created = created.split('');
  created = created.slice(0,10);
  created = created.join('');
  created = created.split('-');
  const year = created.shift();
  created.push(year);
  created = created.join('/')
  


  return (
    <div className='beer-card-wrapper outer-beer-card'>
      {there && (
      <div className='beer-card-wrapper'>
          <NavLink className='beer-card-wrapper beer-card-link' to={`/beers/${beer.id}`}>
            <div className='bch-wrapper'>
              <div className='beer-card-header'>
                <img className='beer-card-img' src='https://user-images.githubusercontent.com/74081636/113222582-5ae89700-9255-11eb-927c-75a82f62ee33.jpeg'/>
                <div className='beer-card-name-style-brew'>
                  <h2 className='beer-card-name'>{beer.name}</h2>
                  <div className='brew-style-wrapper'>
                    <p className='brew-style'>Brewery: {beer.Brewery.name}</p>
                    <p className='brew-style'>Style: {beer.BeerStyle.style}</p>
                  </div>
                </div>
              </div>
              <button className='add-wishlist'>+ Wishlist</button>
            </div>
            <div className='beer-card-description'>{beer.description}</div>
            <div className='beer-card-specs'>
              <div className='left-div'>
                ABV: {beer.abv} 
              </div>
              <div className='middle-div'>
                IBU: {beer.ibu ? beer.ibu : 'N/A'}
              </div>
              <div className='middle-div'>
                Ratings PlaceHolder
              </div>
              <div className='right-div'>
                Added: {created}
              </div>
            </div>
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
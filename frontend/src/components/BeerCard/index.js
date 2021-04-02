import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {deleteBeer, getBeers} from '../../store/beers'

import './BeerCard.css'

const BeerCard = ({beer}) => {
  const dispatch = useDispatch();

  const user = useSelector(state => {
    return state.session.user;
  });

  const deleteClick = async (event) => {
    await dispatch(deleteBeer(beer.id));
    await dispatch(getBeers());
  }
let created;

  if (beer){
    created = beer.createdAt;
    created = created.split('');
    created = created.slice(0,10);
    created = created.join('');
    created = created.split('-');
    const year = created.shift();
    created.push(year);
    created = created.join('/')
  }
  


  return (
    <div className='beer-card-wrapper outer-beer-card'>
      {beer && (
      <div className='beer-card-wrapper'>
          <NavLink className='beer-card-wrapper beer-card-link' to={`/beers/${beer.id}`}>
            <div className='bch-wrapper'>
              <div className='beer-card-header'>
                <img className='beer-card-img' src='https://user-images.githubusercontent.com/74081636/113222582-5ae89700-9255-11eb-927c-75a82f62ee33.jpeg'/>
                <div className='beer-card-name-style-brew'>
                  <h2 className='beer-card-name'>{beer.name}</h2>
                  <div className='brew-style-wrapper'>
                    {beer.Brewery && <p className='brew-style'>Brewery: {beer.Brewery.name}</p>}
                    {beer.BeerStyle && <p className='brew-style'>Style: {beer.BeerStyle.style}</p>}
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
              {created && <div className='right-div'>
                Added: {created}
              </div>}
            </div>
            {user && (
              <div className='user-edit-btns'>
                {user.id === beer.userId && (
                  <div className='user-edit-btns'>
                    <NavLink className='edit-btn' to={`/beers/${beer.id}/edit`}>Edit</NavLink>
                    <button className='delete-btn' onClick={deleteClick}>Delete</button>
                  </div>
                )}
              </div>
            )}
          </NavLink>
      </div>
      )}
    </div>
  )
};

export default BeerCard;
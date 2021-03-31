import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {deleteBeer} from '../../store/beers'

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
    <div>
      {there && (
      <div>
          <NavLink className='card' to={`/beers/${beer.id}`}>
            <h2>{beer.name}</h2>
            <p>{beer.BeerStyle.style}</p>
            <p>{beer.Brewery.name}</p>
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
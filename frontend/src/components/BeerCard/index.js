import {NavLink} from 'react-router-dom';

const BeerCard = ({beer}) => {
  return (
    <NavLink className='card' to={`/beers/${beer.id}`}>
      <h2>{beer.name}</h2>
      <p>{beer.BeerStyle.style}</p>
      <p>{beer.Brewery.name}</p>
    </NavLink>
  )
};

export default BeerCard;
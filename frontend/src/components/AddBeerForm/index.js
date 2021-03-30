import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getBrews} from '../../store/breweries';
import {getStyles, addOneBeer} from '../../store/beers';

const AddBeerForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [brew, setBrew] = useState('');
  const [abv, setAbv] = useState(0);
  const [ibu, setIbu] = useState('');
  const [style, setStyle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getBrews());
    dispatch(getStyles());
  }, [dispatch]);

  const breweries = useSelector(state => {
    return state.brewery.breweries
  });

  const styles = useSelector(state => {
    return state.beer.styles;
  });

  const onSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      breweryId: brew,
      abv,
      ibu,
      styleId: style,
      description
    }
    dispatch(addOneBeer(data));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Beer Name: </label>
          <input type='text' name='name' value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
          <label>Select a Brewery: </label>
          <select value={brew} onChange={(event => setBrew(event.target.value))}>
            <option disabled value=''>Breweries</option>
            {breweries.map(brewery => {
              return(
                <option key={brewery.id} value={brewery.id}>{brewery.name}</option>
              )
            })}
          </select>
        </div>
        <div>
          <label>ABV: </label>
          <input type='number' value={abv} onChange={event => setAbv(event.target.value)}/>
        </div>
        <div>
          <label>IBU: </label>
          <input type='number' value={ibu} onChange={event => setIbu(event.target.value)}/>
        </div>
        <div>
          <label>Select a Beer Style: </label>
          <select value={style} onChange={(event => setStyle(event.target.value))}>
            <option disabled value=''>Beer Styles</option>
            {styles.map(style => {
              return(
                <option key={style.id} value={style.id}>{style.style}</option>
              )
            })}
          </select>
        </div>
        <div>
          <label>Description: </label>
          <textarea value={description} onChange={event => setDescription(event.target.value)}/>
        </div>
        <button type='sumbit'>Add Beer</button>
      </form>
    </div>
  )
};

export default AddBeerForm;